import { Col, Container, Row, Image } from "react-bootstrap";
import { signUpScreen } from "../../../../assets";
import SingUpOrganisms from "../../../../components/organisms/sign-up";
import signUpHooks from "./hooks";

const SignUpPage = () => {
  const [genders, documents] = signUpHooks.useGetCommonLists();
  const signInFormHook = signUpHooks.useSingUpFormHook(genders, documents);
  return (
    <Container fluid className="global-container">
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <Image src={signUpScreen} alt="loginScreen"></Image>
        </Col>
        <Col>
          <SingUpOrganisms
            form={{
              name: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Name",
              },
              lastName: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Last Name",
              },
              email: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Mail",
              },
              password: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Password",
              },
              confirmPassword: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Confirm password",
              },
              phoneNumber: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Phone",
              },
              documentType: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Document type",
              },
              identificationNumber: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "Document number",
              },
              gender: {
                id: "name-sign-up",
                name: "name-sign-up",
                type: "text",
                value: "",
                className: "form-control bg-white border-left-0 border-md",
                placeholder: "",
              },
              button: {
                className: "btn primary btn-block py-2",
                onClick: () => {
                  console.log("algo");
                },
              },
              idForm: "sig-up-form",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
