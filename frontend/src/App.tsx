import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/navigation/navigation.component";

import PersonsPage from "./pages/persons/persons.component";
import AddPersonPage from "./pages/add-person/add-person.component";
import NotFoundPage from "./pages/not-found/not-found.component";
import PersonDetailsPage from "./pages/person-details/person-details.component";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container className="main-container">
        <Row>
          <Col>
            <Switch>
              <Route exact path="/people" component={PersonsPage} />
              <Route exact path="/add-person" component={AddPersonPage} />
              <Route exact path="/people/:id" component={PersonDetailsPage} />
              <Redirect exact path="/" to="/people" />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
