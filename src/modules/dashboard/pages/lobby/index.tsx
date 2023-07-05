import { Col, Container, Row, Image } from "react-bootstrap";
import { lobbyScreen } from "../../../../assets";
import LobbyOrganisms from "../../../../components/organisms/lobby";
import useLobbyHook from "./hooks";

const DashboardPage = () => {
  const userState = useLobbyHook();
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={lobbyScreen} alt="lobbyScreen"></Image>
        </Col>
        <Col>
          <LobbyOrganisms listItemData={userState.activity} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
