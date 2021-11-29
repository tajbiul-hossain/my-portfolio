import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand className="logo">TH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav">
            <Nav.Link href="#home">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#footer">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="#projects">
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link href="#contact">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
