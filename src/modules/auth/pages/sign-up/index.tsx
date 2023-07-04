import { Col, Container, Row, Image } from "react-bootstrap";
import { signUpScreen } from "../../../../assets";
import SingUpOrganisms from "../../../../components/organisms/sign-up";

const SignUpPage = () => {
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={signUpScreen} alt="loginScreen"></Image>
        </Col>
        <Col>
          <SingUpOrganisms />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
