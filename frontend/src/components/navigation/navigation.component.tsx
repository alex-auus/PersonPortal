import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navigation = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">People Portal</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">List</Nav.Link>
        <Nav.Link href="/add-person">Add Person</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
