import { useState, useCallback } from "react";
import { ModalAtomProps } from "../../../../../components/atoms/modal/index";
import { useFormik, FormikProps } from "formik";
import {
  TransferAmountDTO,
  TransferAmountDTOForm,
} from "../../../../../dtos/transaction-dtos";
import * as Yup from "yup";
import Decimal from "decimal.js";
import TransactionsService from "../../../../../services/transactions-services";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../../redux";
import { useToast } from "../../../../../providers/notifications";
import UserHooks from "../../../../../layouts/dashboard/hooks";
const initialValues = {
  typeId: 1,
  userToId: "",
  amount: 0,
} as TransferAmountDTOForm;
type transferMoneyModalProps = {
  modalProps: ModalAtomProps;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowErrors: React.Dispatch<React.SetStateAction<boolean>>;
  showErrors: boolean;
  formik: FormikProps<TransferAmountDTOForm>;
};

const useTransferMoneyHook = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const handleClose = () => setShowModal(false);
  const { addNotification } = useToast();
  const userState = useSelector((state: IRootState) => {
    return state.user;
  });
  const balanceUpdate = useCallback(UserHooks.useNavbarHook().getBalance, [
    showModal,
  ]);
  const validationSchema = Yup.object<TransferAmountDTOForm>().shape({
    userToId: Yup.string().required("El campo usuario destino es requerido"),
    amount: Yup.number()
      .required("El campo monto es requerido")
      .min(10, "el monto mínimo de transferencias es 10 dólares"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (data) => {
      const transactionData: TransferAmountDTO = {
        transaction: {
          typeId: data.typeId,
          userToId: data.userToId,
        },
        amount: new Decimal(data.amount),
      };
      const result = await TransactionsService.transferMoney(
        transactionData,
        userState.userData?.token ?? ""
      );
      if (result.isSuccess) {
        addNotification({
          id: Date.now(),
          variant: "Success",
          title: "¡Transacción exitosa!",
          show: true,
          children: "El se ha transferido a la cuenta destino correctamente.",
        });
        formik.resetForm();
        setShowModal(false);
        balanceUpdate();
      }
    },
  });
  const modalProps: transferMoneyModalProps = {
    setShowModal,
    setShowErrors,
    showErrors,
    modalProps: {
      showModal,
      onHide: handleClose,
      handleCancel: handleClose,
      size: "lg",
      centered: true,
      showCancelButton: true,
      cancelText: "cancelar",
      okText: "Transferir",
      handleOk: () => {
        formik.handleSubmit();
        setShowErrors(Object.entries(formik.errors).length > 1);
      },
      heading: "Transferencia de fondos",
    },
    formik: formik,
  };
  return modalProps;
};

export default useTransferMoneyHook;
