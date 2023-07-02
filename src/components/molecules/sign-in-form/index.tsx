import { ReactElement } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeadingAtom from "../../atoms/heading";
import ParagraphAtom from "../../atoms/paragraph";
import InputAtom, { InputAtomProps } from "../../atoms/Input";
import SpanAtom from "../../atoms/span";
import ButtonAtom, { ButtonAtomProps } from "../../atoms/button";
import LinkAtom from "../../atoms/link";

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
      <Container>
        <Row className="row py-5 mt-4 align-items-center">
          <Col className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <HeadingAtom level={1} className="">
              Inicio de Sesion
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-0">
              ¡Bienvenido a Dany Wallet! Tu billetera digital segura y
              conveniente. Administra tus finanzas en un solo lugar.
            </ParagraphAtom>
            <Form>
              <Form.Group className="row" controlId={idForm}>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-muted"
                      />
                    </span>
                  </div>
                  <InputAtom {...email}></InputAtom>
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <FontAwesomeIcon icon={["fas", "lock"]} />
                    </span>
                  </div>
                  <InputAtom {...password}></InputAtom>
                </div>
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" className="btn btn-primary btn-block py-2">
                    <SpanAtom className="font-weight-bold">Ingreso</SpanAtom>
                  </a>
                  <ButtonAtom {...button}></ButtonAtom>
                </div>
                <div className="text-center w-100">
                  <ParagraphAtom className="text-muted font-weight-bold">
                    Aun no tienes cuenta?
                    <LinkAtom href="#" className="text-primary ml-2">
                      Registrate
                    </LinkAtom>
                  </ParagraphAtom>
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingInFormMolecule;
