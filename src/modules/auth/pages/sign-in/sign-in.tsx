import { Col, Container, Row, Image } from "react-bootstrap";
import SingInOrganisms from "../../../../components/organisms/sign-in/index";

const LoginView = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src="/src/assets/loginScreen.svg"></Image>
        </Col>
        <Col>
          <SingInOrganisms />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginView;
