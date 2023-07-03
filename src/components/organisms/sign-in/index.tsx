import { MouseEventHandler, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingInFormMolecule, {
  SignInFormMoleculeProps,
} from "../../molecules/sign-in-form";

export type SignInOrganismsProps = {
  form: SignInFormMoleculeProps;
};

const SingInOrganisms = (): ReactElement => {
  const actionButtonFunction: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("entro");
  };
  return (
    <Container fluid>
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <SingInFormMolecule
            email={{
              id: "email-sign-in",
              name: "email-sign-in",
              type: "email",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "",
            }}
            password={{
              id: "password-sign-in",
              name: "password-sign-in",
              type: "password",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "",
            }}
            button={{
              className: "btn primary btn-block py-2",
              onClick: actionButtonFunction,
            }}
            idForm={"sig-in-form-01"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SingInOrganisms;
