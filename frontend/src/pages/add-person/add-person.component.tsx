import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import { Person } from "../../models/person";

const AddPersonPage = () => {
  const [pageStatus, setPageStatus] = useState({
    validated: false,
    successfulCreate: false,
    isBusy: false,
  });

  const [formData, setFormData] = useState<Person>(blankForm);

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    setPageStatus({
      successfulCreate: false,
      isBusy: false,
      validated: true,
    });

    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setPageStatus({
        ...pageStatus,
        isBusy: true,
      });

      try {
        const response = await fetch("https://localhost:5001/people", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });

        setPageStatus({
          ...pageStatus,
          isBusy: false,
        });

        if (response.status === 201) {
          setPageStatus({
            ...pageStatus,
            validated: false,
            successfulCreate: true,
          });
          setFormData(blankForm);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  };

  const otherSelected = true;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add person</Card.Title>
        {pageStatus.successfulCreate && (
          <Alert variant="success">Person added successfully!</Alert>
        )}
        <Form
          noValidate
          validated={pageStatus.validated}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                type="text"
                placeholder="First name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                type="text"
                placeholder="Last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Form.Check
                checked={formData.gender === "Male"}
                value="Male"
                onChange={handleChange}
                required
                inline
                type="radio"
                label="Male"
                name="gender"
                id="genderRadiosMale"
              />
              <Form.Check
                checked={formData.gender === "Female"}
                value="Female"
                onChange={handleChange}
                inline
                type="radio"
                label="Female"
                name="gender"
                id="genderRadiosFemale"
              />
              <Form.Check
                checked={formData.gender === "Other"}
                value="Other"
                onChange={handleChange}
                inline
                type="radio"
                label="Other"
                name="gender"
                id="genderRadiosOther"
              />
              {formData.gender === "Other" && (
                <Col xs="auto">
                  <Form.Control
                    required={otherSelected}
                    type="text"
                    placeholder="Other"
                  />
                </Col>
              )}
            </Form.Group>
          </fieldset>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Status
              </Form.Label>
              <Form.Check
                required
                inline
                type="radio"
                label="Yes"
                name="statusRadios"
                id="statusRadios1"
              />
              <Form.Check
                inline
                type="radio"
                label="No"
                name="statusRadios"
                id="statusRadios2"
              />
            </Form.Group>
          </fieldset>
          {pageStatus.isBusy ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="sr-only">Loading...</span>
            </Button>
          ) : (
            <Button type="submit">Submit form</Button>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

const blankForm = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  status: true,
};

export default AddPersonPage;
