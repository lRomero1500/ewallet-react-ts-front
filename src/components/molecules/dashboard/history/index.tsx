import { Dispatch, ReactElement, SetStateAction } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingAtom from "../../../atoms/heading";
import ParagraphAtom from "../../../atoms/paragraph";
import ListGroupAtom from "../../../atoms/list-groups/list-group";
import { ItemListAtomProps } from "../../../atoms/list-groups/item-list";
import ButtonAtom from "../../../atoms/button";

export type HistoryMoleculeProps = {
  listItemData: Array<ItemListAtomProps>;
  setIsHistoryActive: Dispatch<SetStateAction<boolean>>;
};

const HistoryMolecule = ({listItemData, setIsHistoryActive}: HistoryMoleculeProps): ReactElement => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <HeadingAtom level={1} className="mb-2">
              Historial
            </HeadingAtom>
            <ParagraphAtom className="font-italic text-muted mb-3">
              ¡Bienvenido a tu historial en Dany Wallet! Aquí puedes ver toda tu
              actividad.
            </ParagraphAtom>
            <ButtonAtom onClick={() => {setIsHistoryActive(false)}}>Ir atrás</ButtonAtom>
          </Col>
        </Row>
        <hr />
        <Row>
          <ListGroupAtom listItemData={listItemData} />
        </Row>
      </Container>
    </>
  );
};

export default HistoryMolecule;
