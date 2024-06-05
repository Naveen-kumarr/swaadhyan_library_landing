import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/logo.jpg';
import WatsappG from '../Images/whatsapp 1.gif';

export default class NavbarBlack extends Component {
  render() {
    return (
      <>
        <Navbar bg="" variant="" style={{ backgroundColor: "#010101" }} expand="lg">
          <Container style={{ color: "#fff" }}>
            <Navbar.Brand href="#">
              <img src={Logo} style={{ width: "85px" }} alt="Logo" />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link
                href="https://api.whatsapp.com/send?phone=+910000000000&text=Hi,I have some general queries"
                target="_blank"
                style={{ fontWeight: "700",color:"#fff" }}
              >
                Contact us: <img src={WatsappG} style={{ width: "4vh" }} alt="WhatsApp GIF" />
              </Nav.Link>
              <Nav.Link
                href="#"
                target="_blank"
                style={{ fontWeight: "700",color:"#fff" }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
