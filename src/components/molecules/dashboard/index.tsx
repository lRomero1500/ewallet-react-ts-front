import { ReactElement } from "react";
import ButtonAtom, { ButtonAtomProps } from "../../atoms/button";
import { Col, Container, Row } from "react-bootstrap";
import HeadingAtom from "../../atoms/heading";
import ParagraphAtom from "../../atoms/paragraph";

export type DashboardMoleculeProps = {
  transferMoney: ButtonAtomProps;
  activity: ButtonAtomProps;
};
const DashboardMolecule = ({
  transferMoney,
  activity,
}: DashboardMoleculeProps): ReactElement => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <HeadingAtom level={1} className="mb-2">
              Bienvenido a <b>Dany Wallet!</b>
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-3">
              ¡Bienvenido a tu dashboard en Dany Wallet! Aquí puedes transferir
              dinero de manera segura y consultar tu historial de transacciones.
              Mantén el control total de tus finanzas con facilidad y
              tranquilidad.
            </ParagraphAtom>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <HeadingAtom level={4} className="mb-2 mt-2">
              ¡Hola! ¿En qué puedo ayudarte hoy?
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-5">
              Selecciona una opción para continuar:
            </ParagraphAtom>
          </Col>
        </Row>
        <Row>
          <Col className="d-grid gap-2">
            <ButtonAtom {...transferMoney}>Trasnferir dinero</ButtonAtom>
          </Col>
          <Col className="d-grid gap-2">
            <ButtonAtom {...activity}>Ver Historial</ButtonAtom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardMolecule;
