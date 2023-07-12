import { Col, Container, Row, Image } from "react-bootstrap";
import SingInOrganisms from "../../../../components/organisms/sign-in/index";
import "./style.css";
import { loginScreen } from "../../../../assets";
import { ReactElement, useState } from "react";
import useSignInFormHook from "./hooks";

const SignInPage = (): ReactElement => {
  const [show, setShow] = useState(false);
  const signInFormHook = useSignInFormHook();
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
                name: "email",
                type: "email",
                value: signInFormHook.values.email,
                onChange: signInFormHook.handleChange,
                className: `bg-white border-left-0 border-md ${
                  signInFormHook.errors.email && signInFormHook.touched.email
                    ? " is-invalid"
                    : ""
                }`,
                error: signInFormHook.errors.email,
                placeholder: "Email",
              },
              password: {
                id: "password-sign-in",
                name: "password",
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
                placeholder: "Contraseña",
              },
              button: {
                type: "submit",
                className: "btn primary btn-block py-2",
                disabled: signInFormHook.isSubmitting,
                isLoading: signInFormHook.isSubmitting,
              },
              idForm: "sig-in-form-01",
              onSubmit: (e) => {
                signInFormHook.handleSubmit(e);
                setShow(Object.entries(signInFormHook.errors).length > 1);
              },
              errors: signInFormHook.errors,
              show: show,
              setShow: setShow,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
