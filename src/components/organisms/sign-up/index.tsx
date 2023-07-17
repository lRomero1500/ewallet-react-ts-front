import { ReactElement } from "react";
import { SignUpFormMoleculeProps } from "../../molecules";
import { Col, Container, Row } from "react-bootstrap";
import SignUpFromMolecule from "../../molecules/sign-up-form";

export type SignUpOrganismsProps = {
  form: SignUpFormMoleculeProps;
};

const SingUpOrganisms = ({ form }: SignUpOrganismsProps): ReactElement => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SignUpFromMolecule {...form} />
        </Col>
      </Row>
    </Container>
  );
};

export default SingUpOrganisms;
