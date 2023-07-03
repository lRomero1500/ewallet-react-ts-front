import { Col, Container, Row, Image } from "react-bootstrap";
import { loginScreen } from "../../../../assets";

const DashboardPage = () => {
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={loginScreen} alt="loginScreen"></Image>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
