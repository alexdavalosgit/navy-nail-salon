import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import Infobar from './Infobar'

function NavbarComp() {
    return (
        <Navbar bg="light" sticky='top' expand="md" className='py-2'>
          <Container>
            <Navbar.Brand href="#home" className="fs-3 fw-bold secondary-color">Navy Yard Nails</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="link-style">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavbarComp