import { ReactElement } from "react";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import ItemListAtom, { ItemListAtomProps } from "../item-list";
import './style.css'

export type ListGroupAtomProps = {
  listItemData: Array<ItemListAtomProps>;
};

const ListGroupAtom = ({ listItemData }: ListGroupAtomProps): ReactElement => {
  const showScroll = listItemData.length > 3;
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col>
          <ListGroup className={showScroll ? "overflow-auto-item" : ""}>
            {listItemData.map((item) => {
              return (
                <ItemListAtom
                  transactionType={item.transactionType}
                  movementType={item.movementType}
                  status={item.status}
                  amount={item.amount}
                  icon={item.icon}
                  key={item.key}
                />
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ListGroupAtom;
