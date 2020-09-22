import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import PaginationBar from "../../components/pagination-bar/pagination-bar.component";
import { Person } from "../../models/person";

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
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {people.map((md) => (
              <tr key={md.id}>
                <td>{md.id}</td>
                <td>{md.firstName}</td>
                <td>{md.lastName}</td>
                <td>{md.email}</td>
                <td>{md.gender}</td>
                <td>{md.status ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <PaginationBar />
      </Card.Body>
    </Card>
  );
};
export default PersonsPage;
