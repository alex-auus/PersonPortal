import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = (path: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      history.push(path);
    };
  };

  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#" onClick={handleClick("/")}>
        People Portal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" activeKey={location.pathname}>
          <Nav.Link onClick={handleClick("/")}>List</Nav.Link>
          <Nav.Link onClick={handleClick("/add-person")}>Add Person</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
