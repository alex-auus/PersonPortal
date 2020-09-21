import React from "react";

import "./App.scss";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
