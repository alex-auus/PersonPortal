import React, { useEffect, useState } from "react";
import { Person } from "../../models/person";
import { useParams } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";

const PersonDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://localhost:5001/people/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setPerson(response);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <div>Id: {person?.id}</div>
      <div>First Name: {person?.firstName}</div>
      <div>Last Name: {person?.lastName}</div>
      <div>Email: {person?.email}</div>
      <div>First Name: {person?.gender}</div>
      <div>Status: {person?.status ? "Yes" : "No"}</div>
    </div>
  );
};

export default PersonDetailsPage;
