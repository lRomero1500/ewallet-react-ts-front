import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ButtonAtom from "../../components/atoms/button";
import UserHooks from "./hooks";

const DashboardLayout = (): ReactElement => {
  const user = UserHooks.useNavbarHook().userState;
  const signOut = UserHooks.useSignOutHook();
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
              <ButtonAtom onClick={signOut} variant="outline-secondary">
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
