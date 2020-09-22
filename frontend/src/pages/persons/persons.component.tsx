import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { Person } from "../../models/person";
import { NavLink } from "react-router-dom";

const PersonsPage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:5001/people")
      .then((response) => response.json())
      .then((response) => {
        setPeople(response);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>People</Card.Title>
        <Table size="sm" responsive striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p.id}>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.email}</td>
                <td>
                  <NavLink to={`/people/${p.id}`}>View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
export default PersonsPage;
