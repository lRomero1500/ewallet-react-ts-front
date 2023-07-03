import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DashboardMolecule from "../../molecules/dashboard";

const LobbyOrganisms = (): ReactElement => {
  return (
    <Container fluid>
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <DashboardMolecule
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
                console.log();
              },
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default LobbyOrganisms;
