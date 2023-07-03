import { Col, Container, Row, Image } from "react-bootstrap";
import SingInOrganisms from "../../../../components/organisms/sign-in/index";
import "./style.css";
import { loginScreen } from "../../../../assets";

const SignInPage = () => {
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={loginScreen} alt="loginScreen"></Image>
        </Col>
        <Col>
          <SingInOrganisms />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
