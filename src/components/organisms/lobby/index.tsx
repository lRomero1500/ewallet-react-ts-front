import { ReactElement, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LobbyMolecule from "../../molecules/dashboard/lobby";
import HistoryMolecule from "../../molecules/dashboard/history";
import { ItemListAtomProps } from "../../atoms/list-groups/item-list";

export type LobbyOrganismsProps = {
  listItemData: ItemListAtomProps[];
  transferMoneyHandleClick:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
};

const LobbyOrganisms = ({
  listItemData,
  transferMoneyHandleClick,
}: LobbyOrganismsProps): ReactElement => {
  const [isHistoryActive, setIsHistoryActive] = useState(false);
  return (
    <Container fluid>
      <Row className="py-5 mt-4 align-items-center">
        <Col>
          {!isHistoryActive ? (
            <LobbyMolecule
              transferMoney={{
                className: "btn primary btn-block py-2",
                onClick: transferMoneyHandleClick,
              }}
              activity={{
                variant: "outline-secondary",
                className: "btn-block py-2",
                onClick: () => {
                  setIsHistoryActive(true);
                },
              }}
            />
          ) : (
            <HistoryMolecule
              listItemData={listItemData}
              setIsHistoryActive={setIsHistoryActive}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default LobbyOrganisms;
