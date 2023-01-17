import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar sticky="top" expand="md" className="py-2 bg-cream">
      <Container>
        <Navbar.Brand href="/" className="fs-3 fw-bold secondary-color">
          Navy Nails & Spa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="link-style">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
