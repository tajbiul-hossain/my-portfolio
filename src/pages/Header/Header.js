import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
const Header = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand className="logo">TH</Navbar.Brand>
        <Navbar.Toggle>
          <i className="fas fa-ellipsis-v"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav">
            <Nav.Link as={Link} to="/home">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <span>About</span>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#projects">
              <span>Projects</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              <span>Blog</span>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
