import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Top() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">
          <span className="fa fa-search mr-2" />
          Sample search app
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Top;
