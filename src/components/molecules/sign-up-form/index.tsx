import { ReactElement } from "react";
import InputAtom, { InputAtomProps } from "../../atoms/Input";
import ButtonAtom, { ButtonAtomProps } from "../../atoms/button";
import HeadingAtom from "../../atoms/heading";
import ParagraphAtom from "../../atoms/paragraph";
import LinkAtom from "../../atoms/link";
import { Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faPhone,
  faTransgender,
  faIdCard,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";

export type SignUpFormMoleculeProps = {
  name: InputAtomProps;
  lastName: InputAtomProps;
  gender: InputAtomProps;
  identificationNumber: InputAtomProps;
  documentType: InputAtomProps;
  phoneNumber: InputAtomProps;
  button: ButtonAtomProps;
  email: InputAtomProps;
  password: InputAtomProps;
  confirmPassword: InputAtomProps;
  idForm: string;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const SignUpFormMolecule = ({
  idForm,
  name,
  lastName,
  gender,
  identificationNumber,
  documentType,
  phoneNumber,
  button,
  email,
  password,
  confirmPassword,
  onSubmit,
}: SignUpFormMoleculeProps): ReactElement => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <HeadingAtom level={1} className="mb-2">
              Crea una cuenta!
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-5">
              ¡Únete a la revolución financiera con Dany Wallet! Crea tu cuenta
              y descubre la libertad de una billetera digital. ¡Tu futuro
              financiero comienza aquí!
            </ParagraphAtom>
            <Form id={idForm} onSubmit={onSubmit} noValidate>
              <Form.Group className="row">
                <Container fluid>
                  <Row>
                    <Col>
                      <InputGroup className="col-lg-6 mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...name}></InputAtom>
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...lastName}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className=" col-lg-12 mb-4">
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
                      <InputGroup className="col-lg-12 mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...phoneNumber}></InputAtom>
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faTransgender}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...gender}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className="input-group col-lg-6 mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faIdCard}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...documentType}></InputAtom>
                        <InputAtom {...identificationNumber}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup className="input-group col-lg-6 mb-4">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon
                            icon={faPassport}
                            className="text-muted"
                          />
                        </InputGroup.Text>
                        <InputAtom {...password}></InputAtom>
                        <InputAtom {...confirmPassword}></InputAtom>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-grid gap-2">
                      <ButtonAtom {...button}>Crea tu cuenta</ButtonAtom>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center w-100">
                      <ParagraphAtom className="text-muted font-weight-bold mt-2">
                        Ya tienes cuenta?
                        <LinkAtom href="/sign-in" className="text-primary ms-1">
                          Ingresa a tu cuenta
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
export default SignUpFormMolecule;
