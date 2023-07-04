import { ReactElement } from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

export type ItemListAtomProps = {
  transactionType: string;
  movementType: string;
  status: string;
  amount: string;
  icon: number;
  transactionId: number;
};

const ItemListAtom = ({
  transactionType,
  movementType,
  status,
  amount,
  icon,
  transactionId,
}: ItemListAtomProps): ReactElement => {
  const key = `transactionId_${transactionId}`;
  return (
    <ListGroup.Item
      key={key}
      action
      className="d-flex justify-content-between align-items-start mt-3 shadow customItemStyle"
    >
      <Container fluid>
        <Row>
          <Col>
            <b>Transaction Type:</b> {transactionType}
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Movement Type:</b> {movementType}
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Status:</b> {status}
          </Col>
        </Row>
        <Row>
          <Col>
            <b>Amount:</b> {amount}
          </Col>
        </Row>
      </Container>
      <Badge bg="primary">
        {icon === 1 ? (
          <FontAwesomeIcon icon={faUpload} />
        ) : (
          <FontAwesomeIcon icon={faDownload} />
        )}
      </Badge>
    </ListGroup.Item>
  );
};

export default ItemListAtom;
