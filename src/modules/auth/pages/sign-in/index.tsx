import { Col, Container, Row, Image } from "react-bootstrap";
import SingInOrganisms from "../../../../components/organisms/sign-in/index";
import "./style.css";
import { loginScreen } from "../../../../assets";
import { ReactElement } from "react";
import SignInFormHook from "./hooks";

const SignInPage = (): ReactElement => {
  const signInFormHook = SignInFormHook();
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={loginScreen} alt="loginScreen"></Image>
        </Col>
        <Col>
          <SingInOrganisms
            form={{
              email: {
                id: "email-sign-in",
                name: "email-sign-in",
                type: "email",
                value: signInFormHook.values.email,
                onChange: signInFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signInFormHook.errors.email && signInFormHook.touched.email
                    ? " is-invalid"
                    : ""
                }`,
                error: signInFormHook.errors.email,
                placeholder: "",
              },
              password: {
                id: "password-sign-in",
                name: "password-sign-in",
                type: "password",
                value: signInFormHook.values.password,
                onChange: signInFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signInFormHook.errors.password &&
                  signInFormHook.touched.password
                    ? " is-invalid"
                    : ""
                }`,
                error: signInFormHook.errors.password,
                placeholder: "",
              },
              button: {
                type: "submit",
                className: "btn primary btn-block py-2",
              },
              idForm: "sig-in-form-01",
              onSubmit: signInFormHook.handleSubmit,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
