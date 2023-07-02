import { MouseEventHandler, ReactElement } from "react";
import { Container, Row } from "react-bootstrap";
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
      <Row>
        <SingInFormMolecule
          email={{
            id: "email-sign-in",
            name: "email-sign-in",
            type: "email",
            value: "",
            className: "",
            placeholder: "",
          }}
          password={{
            id: "password-sign-in",
            name: "password-sign-in",
            type: "password",
            value: "",
            className: "",
            placeholder: "",
          }}
          button={{
            text: "",
            children: "Botón",
            onClick: actionButtonFunction,
          }}
          idForm={"sig-in-form-01"}
        />
      </Row>
    </Container>
  );
};

export default SingInOrganisms;
