import { ReactElement } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import HeadingAtom from "../../atoms/heading";
import ParagraphAtom from "../../atoms/paragraph";
import InputAtom, { InputAtomProps } from "../../atoms/Input";
import ButtonAtom, { ButtonAtomProps } from "../../atoms/button";
import LinkAtom from "../../atoms/link";
import "./style.css";

export type SignInFormMoleculeProps = {
  email: InputAtomProps;
  password: InputAtomProps;
  button: ButtonAtomProps;
  idForm: string;
};

const SingInFormMolecule = ({
  email,
  password,
  button,
  idForm,
}: SignInFormMoleculeProps): ReactElement => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <HeadingAtom level={1} className="mb-2">
              Inicio de Sesion
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-5">
              ¡Bienvenido a <b>Dany Wallet!</b> Tu billetera digital segura y
              conveniente. Administra tus finanzas en un solo lugar.
            </ParagraphAtom>
            <Form>
              <Form.Group className="row" controlId={idForm}>
                <Container fluid>
                  <Row>
                    <Col>
                      <InputGroup className="input-group col-lg-12 mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...email}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className="input-group col-lg-12 mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...password}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-grid gap-2">
                      <ButtonAtom {...button}>Inicio de sesion</ButtonAtom>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center w-100">
                      <ParagraphAtom className="text-muted font-weight-bold mt-2">
                        Aun no tienes cuenta?
                        <LinkAtom href="/sign-up" className="text-primary ms-1">
                          Registrate
                        </LinkAtom>
                      </ParagraphAtom>
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

export default SingInFormMolecule;
