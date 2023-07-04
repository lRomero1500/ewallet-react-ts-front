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
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const SingInFormMolecule = ({
  email,
  password,
  button,
  idForm,
  onSubmit,
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
            <Form id={idForm} onSubmit={onSubmit} noValidate>
              <Form.Group className="row">
                <Container fluid>
                  <Row>
                    <Col>
                      <InputGroup
                        hasValidation
                        className="input-group col-lg-12 mb-3"
                      >
                        <InputGroup.Text id="userPrepend">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom
                          {...email}
                          ariaDescribedby="userPrepend"
                        ></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup
                        hasValidation
                        className="input-group col-lg-12 mb-3"
                      >
                        <InputGroup.Text id="passwordPrepend">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom
                          {...password}
                          ariaDescribedby="passwordPrepend"
                        ></InputAtom>
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
