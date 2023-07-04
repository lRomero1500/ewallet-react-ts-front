import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LinkAtom from "../../components/atoms/link";
import ButtonAtom from "../../components/atoms/button";

const DashboardLayout = (): ReactElement => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faWallet} color="#ba68c8" /> Dany Wallet</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Hola: <b>Mark Otto</b>
            </Navbar.Text>
            <Navbar.Text className="ms-1">
              tu saldo es de: <b>$1.000</b>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="ms-1">
              <ButtonAtom onClick={()=>{console.log('salir')}} variant="outline-secondary">Loguot</ButtonAtom>
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
