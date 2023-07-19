import { useState } from "react";
import { ModalAtomProps } from "../../../../../components/atoms/modal/index";
import { useFormik, FormikProps } from "formik";
import { TransferAmountDTOForm } from "../../../../../dtos/transaction-dtos";
import * as Yup from "yup";
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
  const validationSchema = Yup.object<TransferAmountDTOForm>().shape({
    userToId: Yup.string().required("El campo usuario destino es requerido"),
    amount: Yup.number()
      .required("El campo monto es requerido")
      .min(10, "el monto minimo de transferencias es 10 dolares"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (data) => {
      console.log(data);
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
