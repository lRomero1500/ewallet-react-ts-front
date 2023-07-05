import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingInFormMolecule, {
  SignInFormMoleculeProps,
} from "../../molecules/sign-in-form";

export type SignInOrganismsProps = {
  form: SignInFormMoleculeProps;
};

const SingInOrganisms = ({ form }: SignInOrganismsProps): ReactElement => {
  return (
    <Container fluid>
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          <SingInFormMolecule {...form} />
        </Col>
      </Row>
    </Container>
  );
};

export default SingInOrganisms;
