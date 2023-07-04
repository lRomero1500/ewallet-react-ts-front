import { ReactElement } from "react";
import { SignUpFormMoleculeProps } from "../../molecules";
import { Col, Container, Row } from "react-bootstrap";
import SignUpFromMolecule from "../../molecules/sign-up-form";

export type SignUpOrganismsProps = {
  form: SignUpFormMoleculeProps;
};

const SingUpOrganisms = (): ReactElement => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SignUpFromMolecule
            name={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Name",
            }}
            lastName={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Last Name",
            }}
            email={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Mail",
            }}
            password={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Password",
            }}
            confirmPassword={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Confirm password",
            }}
            phoneNumber={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Phone",
            }}
            documentType={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Document type",
            }}
            identificationNumber={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "Document number",
            }}
            gender={{
              id: "name-sign-up",
              name: "name-sign-up",
              type: "text",
              value: "",
              className: "form-control bg-white border-left-0 border-md",
              placeholder: "",
            }}
            button={{
              className: "btn primary btn-block py-2",
              onClick: () => {
                console.log("algo");
              },
            }}
            idForm={"sig-up-form"}
          ></SignUpFromMolecule>
        </Col>
      </Row>
    </Container>
  );
};

export default SingUpOrganisms;
