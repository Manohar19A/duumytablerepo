import React, { useEffect, useRef, useState } from "react";
import { Alert, Card, FormSelect } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import axios from "../../../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientAdmin = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {
      lastName,
      userName,
      firstName,
      email,
      phoneNo,
      subscriptionStartDate,
      subscriptionEndDate,
      country,
      clientIdProof,
      address,
      password,
      userType,
    } = form;

    const newErrors = {};

    // validations for forms

    if (!firstName || firstName === "" || !firstName.match(/^[aA-zZ\s]+$/))
      newErrors.firstName = "Please Enter First Name";
    if (!lastName || lastName === "" || !lastName.match(/^[aA-zZ\s]+$/))
      newErrors.lastName = "Please Enter Last Name";
    if (!email || email === "") newErrors.email = "Please Enter Email";
    if (
      !phoneNo ||
      phoneNo === "" ||
      !phoneNo.match(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.phoneNo = "Please Enter valid Phone Number";
    if (!subscriptionStartDate || subscriptionStartDate === "")
      newErrors.subscriptionStartDate = "Please Enter Subscription Start Date";
    if (!subscriptionEndDate || subscriptionEndDate === "")
      newErrors.subscriptionEndDate = "Please Enter Subscription End Date";
    if (!country || country === "" || !country.match(/^[aA-zZ\s]+$/))
      newErrors.country = "Please Enter Country";
    if (!userType || userType === "" || !userType.match(/^[aA-zZ\s]+$/))
      newErrors.userType = "Please Enter UserType";
    if (
      !clientIdProof ||
      clientIdProof === "" ||
      !clientIdProof.match(/^[aA-zZ\s]||[0-9\b]+$/)
    )
      newErrors.clientIdProof = "Please Enter valid Id-Proof";

    if (!address || address === "") newErrors.address = "Please Enter Address";
    if (!userName || userName === "")
      newErrors.userName = "Please Enter User name";

    if (
      !password ||
      password === "" ||
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])|(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
      )
    )
      newErrors.password = "please give valid password";

    return newErrors;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // e.target.reset();
    const Url = "/client/saveClient";
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);
      console.log("form submitted");

      axios
        .post(Url, form)
        .then((response) => {
          const Clientuser = response.data;
          alert("Data sent successfully");
          loadData();
          // toast.success("Data Submitted successfully")
          console.log(Clientuser);
        })
        .catch((err) => {
          //  toast.error("Given details already exist please give Unique values")
          alert("Given details already exist please give Unique values");
        });
    }
  };

  return (
    <Card style={{ marginTop: 10 }}>
      <Card.Header>
        <Card.Body>
          <Card.Title align="center">ClientAdmin</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" align="center">
            ClientAdmin Creation Form
          </Card.Subtitle>

          <Form
            // ref={formRef}
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-5">
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  className="firstName"
                  type="text"
                  controlId="firstName"
                  placeholder="Enter First name"
                  // onChange={(event) => setFirstName(event.target.value)}
                  value={form.firstName}
                  onChange={(e) => setField("firstName", e.target.value)}
                  isInvalid={!!errors.firstName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  type="text"
                  controlId="lastName"
                  placeholder=" Enter Last name"
                  value={form.lastName}
                  onChange={(e) => setField("lastName", e.target.value)}
                  isInvalid={!!errors.lastName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone Number"
                  controlId="phoneNo"
                  value={form.phoneNumber}
                  onChange={(e) => setField("phoneNo", e.target.value)}
                  isInvalid={!!errors.phoneNumber}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Country"
                  controlId="country"
                  value={form.country}
                  onChange={(e) => setField("country", e.target.value)}
                  isInvalid={!!errors.country}
                >
                  {/* <option>Select </option>
                                    {
                                        countries.map(country => (
                                            <option>{country.countryName}</option>
                                        ))
                                    } */}
                </Form.Control>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Client Id-Proof Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ClientIdProof "
                  controlId="clientIdProof"
                  value={form.clientIdProof}
                  onChange={(e) => setField("clientIdProof", e.target.value)}
                  isInvalid={!!errors.clientIdProof}
                >
                  {/* <option>Select </option>
                  {
                   departments.map(departmentss => (
                    <option>{departmentss.departmentName}</option>
                         ))
                 } */}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.ClientIdProof}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Subscription Start Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Subscription Start Date"
                  controlId="subscriptionStartDate"
                  value={form.subscriptionStartDate}
                  onChange={(e) =>
                    setField("subscriptionStartDate", e.target.value)
                  }
                  isInvalid={!!errors.subscriptionStartDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.subscriptionStartDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Subscription End Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="subscription End Date "
                  controlId="subscriptionEndDate"
                  value={form.subscriptionEndDate}
                  onChange={(e) =>
                    setField("subscriptionEndDate", e.target.value)
                  }
                  isInvalid={!!errors.subscriptionEndDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.subscriptionEndDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>User Type</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter user Type"
                  controlId="userType"
                  value={form.userType}
                  onChange={(e) => setField("userType", e.target.value)}
                  isInvalid={!!errors.userType}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.userType}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  controlId="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  name="User_Name"
                  type="text"
                  controlId="userName"
                  placeholder="UserName"
                  value={form.userName}
                  onChange={(e) => setField("userName", e.target.value)}
                  isInvalid={!!errors.userName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.userName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Password</Form.Label>
                {/* password */}
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  controlId="password"
                  value={form.password}
                  onChange={(e) => setField("password", e.target.value)}
                  isInvalid={!!errors.password}
                ></Form.Control>

                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>

                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                height="10rem"
                style={{ padding: 10 }}
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="textarea"
                  style={{ height: "80px" }}
                  placeholder="Address"
                  controlId="address"
                  value={form.address}
                  onChange={(e) => setField("address", e.target.value)}
                  isInvalid={!!errors.address}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Button
              className="rounded-pill"
              variant="warning"
              style={{
                color: "#F4F8F6",
                backgroundColor: "#A020F0",
                float: "right",
                width: "10rem",
              }}
              text="save"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card.Header>
    </Card>
  );
};

export default ClientAdmin;
