import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TransferAmountFormMolecule, {
  TransferAmountFormMoleculeProps,
} from "../../molecules/transfer-amount-form";

export type TransferMoneyOrganismsProps = {
  form: TransferAmountFormMoleculeProps;
};

const TransferMoneyOrganisms = ({
  form,
}: TransferMoneyOrganismsProps): ReactElement => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TransferAmountFormMolecule {...form} />
        </Col>
      </Row>
    </Container>
  );
};

export default TransferMoneyOrganisms;
