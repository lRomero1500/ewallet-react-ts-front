import { Col, Container, Row, Image } from "react-bootstrap";
import { lobbyScreen } from "../../../../assets";
import LobbyOrganisms from "../../../../components/organisms/lobby";

const DashboardPage = () => {
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={lobbyScreen} alt="lobbyScreen"></Image>
        </Col>
        <Col>
          <LobbyOrganisms></LobbyOrganisms>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
