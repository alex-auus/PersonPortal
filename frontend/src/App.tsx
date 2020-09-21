import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Container from "react-bootstrap/Container";

import Navigation from "./components/navigation/navigation.component";

import PersonsPage from "./pages/persons/persons.component";
import AddPersonPage from "./pages/add-person/add-person.component";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Switch>
          <Route exact path="/" component={PersonsPage} />
          <Route exact path="/add-person" component={AddPersonPage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
