import React from "react";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import MOCK_DATA from "./MOCK_DATA.json";

import PaginationBar from "../../components/pagination-bar/pagination-bar.component";

const PersonsPage: React.FC = () => {
  return (
    <Card>
      <Card.Body>
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
            {MOCK_DATA.slice(0, 11).map((md) => (
              <tr key={md.id}>
                <td>{md.id}</td>
                <td>{md.first_name}</td>
                <td>{md.last_name}</td>
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
