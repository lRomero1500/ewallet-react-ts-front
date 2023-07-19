import { ReactElement } from "react";
import InputAtom, { InputAtomProps } from "../../atoms/Input";
import ToastAtom from "../../atoms/toast";
import { FormikErrors } from "formik";
import { TransferAmountDTOForm } from "../../../dtos/transaction-dtos";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { faUser, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type TransferAmountFormMoleculeProps = {
  userToId: InputAtomProps;
  amount: InputAtomProps;
  errors: FormikErrors<TransferAmountDTOForm>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  idForm: string;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};
const showToastErrors = (
  errors: FormikErrors<TransferAmountDTOForm>,
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
): ReactElement => {
  return (
    <ToastAtom
      variant="Danger"
      title="Errores"
      showNotification={show}
      setShow={setShow}
    >
      <ul>
        {Object.entries(errors).map((item) => {
          return <li key={item[0]}>{item[1]}</li>;
        })}
      </ul>
    </ToastAtom>
  );
};
const TransferAmountFormMolecule = ({
  userToId,
  amount,
  errors,
  show,
  setShow,
  idForm,
}: TransferAmountFormMoleculeProps): ReactElement => {
  return (
    <>
      {Object.entries(errors).length
        ? showToastErrors(errors, show, setShow)
        : ""}
      <Container fluid>
        <Row>
          <Col>
            <Form id={idForm} noValidate>
              <Form.Group className="row">
                <Container fluid>
                  <Row>
                    <Col>
                      <InputGroup className="col-lg-6 mb-4">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...userToId}></InputAtom>
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faDollar}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...amount}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TransferAmountFormMolecule;
