import { Col, Container, Row, Image } from "react-bootstrap";
import { lobbyScreen } from "../../../../assets";
import LobbyOrganisms from "../../../../components/organisms/lobby";
import useLobbyHook from "./hooks/user-activity";
import useTransferMoneyHook from "./hooks/transfer-money";
import ModalAtom from "../../../../components/atoms/modal";
import TransferMoneyOrganisms from "../../../../components/organisms/transfer-money/index";

const DashboardPage = () => {
  const userState = useLobbyHook();
  const transferMoney = useTransferMoneyHook();
  return (
    <>
      {transferMoney.modalProps.showModal ? ( //TODO: Refactor this because an atom can not contains an organisms
        <ModalAtom {...transferMoney.modalProps}>
          <TransferMoneyOrganisms
            form={{
              idForm: "transfer-money",
              userToId: {
                id: "userToId-transfer-money",
                name: "userToId",
                type: "userToId",
                value: transferMoney.formik.values.userToId,
                onChange: transferMoney.formik.handleChange,
                className: `bg-white border-left-0 border-md ${
                  transferMoney.formik.errors.userToId &&
                  transferMoney.formik.touched.userToId
                    ? " is-invalid"
                    : ""
                }`,
                error: transferMoney.formik.errors.userToId,
                placeholder: "Usuario Destino",
              },
              amount: {
                id: "amount-transfer-money",
                name: "amount",
                type: "amount",
                value: transferMoney.formik.values.amount,
                onChange: transferMoney.formik.handleChange,
                className: `bg-white border-left-0 border-md ${
                  transferMoney.formik.errors.amount &&
                  transferMoney.formik.touched.amount
                    ? " is-invalid"
                    : ""
                }`,
                error: transferMoney.formik.errors.amount,
                placeholder: "Cantidad",
              },
              errors: transferMoney.formik.errors,
              show: transferMoney.showErrors,
              setShow: transferMoney.setShowErrors,
              onSubmit: undefined,
            }}
          />
        </ModalAtom>
      ) : (
        <></>
      )}
      <Container fluid className="global-container">
        <Row className="py-5 mt-4 align-items-center">
          <Col>
            <Image src={lobbyScreen} alt="lobbyScreen"></Image>
          </Col>
          <Col>
            <LobbyOrganisms
              listItemData={userState.activity}
              transferMoneyHandleClick={() => transferMoney.setShowModal(true)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
