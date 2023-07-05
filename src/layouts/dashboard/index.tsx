import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ButtonAtom from "../../components/atoms/button";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux";
import useNavbarHook from "./hooks";
import { setBalance } from "../../redux/slices/user-slice";

const DashboardLayout = (): ReactElement => {
  const user = useNavbarHook();
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faWallet} color="#ba68c8" /> Dany Wallet
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hola:{" "}
              <b>{`${user.userData?.person.name} ${user.userData?.person.lastName}`}</b>
            </Navbar.Text>
            <Navbar.Text className="ms-1">
              tu saldo es de: <b>${user.balance}</b>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="ms-1">
              <ButtonAtom
                onClick={() => {
                  console.log("salir");
                }}
                variant="outline-secondary"
              >
                sign out
              </ButtonAtom>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="customStyleContainer">
        <Outlet />
      </Container>
    </Container>
  );
};

export default DashboardLayout;
