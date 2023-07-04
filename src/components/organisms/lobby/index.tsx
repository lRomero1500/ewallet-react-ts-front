import { ReactElement, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LobbyMolecule from "../../molecules/dashboard/lobby";
import HistoryMolecule from "../../molecules/dashboard/history";

const LobbyOrganisms = (): ReactElement => {
  const [isHistoryActive, setIsHistoryActive] = useState(false);

  const dataTest = [
    {
      transactionType: "System deposit",
      movementType: "Credit",
      status: "Approved",
      amount: "1000",
      icon: 1,
      key: '1'
    },
    {
      transactionType: "System deposit",
      movementType: "Credit",
      status: "Approved",
      amount: "1000",
      icon: 0,
      key: '2'
    },
    {
      transactionType: "System deposit",
      movementType: "Credit",
      status: "Approved",
      amount: "1000",
      icon: 0,
      key: '3'
    },
    {
      transactionType: "System deposit",
      movementType: "Credit",
      status: "Approved",
      amount: "1000",
      icon: 0,
      key: '4'
    },
  ] ;

  return (
    <Container fluid>
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          {!isHistoryActive ? (
            <LobbyMolecule
              transferMoney={{
                className: "btn primary btn-block py-2",
                onClick: () => {
                  console.log();
                },
              }}
              activity={{
                variant: "outline-secondary",
                className: "btn-block py-2",
                onClick: () => {
                  setIsHistoryActive(true);
                },
              }}
            />
          ) : (
            <HistoryMolecule listItemData={dataTest} setIsHistoryActive={setIsHistoryActive} />
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default LobbyOrganisms;
