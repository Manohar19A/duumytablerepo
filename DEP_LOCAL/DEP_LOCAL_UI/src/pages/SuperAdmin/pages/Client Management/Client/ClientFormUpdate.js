import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Button,
  ProgressBar,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import axios from "../../../../../Uri";
import FormContainer from "./FormContainer";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientFormUpdate = (props) => {
  console.log(props.updateClient);

  const navigate = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState(props.updateClient.firstName);
  const [lastName, setLastName] = useState(props.updateClient.lastName);
  const [userName, setUserName] = useState(props.updateClient.userName);
  const [email, setEmail] = useState(props.updateClient.email);
  const [phoneNo, setPhoneNo] = useState(props.updateClient.phoneNo);
  const [subscriptionStartDate, setSubscriptionStartDate] = useState(
    props.updateClient.subscriptionStartDate
  );
  const [country, setCountry] = useState(props.updateClient.country);
  const [subscriptionEndDate, setSubscriptionEndDate] = useState(
    props.updateClient.subscriptionEndDate
  );

  const [clientIdProof, setClientIdProof] = useState(
    props.updateClient.clientIdProof
  );
  const [address, setAddress] = useState(props.updateClient.address);
  const [password, setPassword] = useState(props.updateClient.password);
  const [userType, setUser] = useState(props.updateClient.userType);

  const notify = () => toast();

  function setCourse(fiel, innerText) {
    setCourses({
      ...courses,
      [fiel]: innerText,
    });
  }
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

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    try{
        const res = await axios
        .put(`/client/updateClient/${props.updateClient.clientId}`, {
          firstName,
          lastName,
          userType,
          email,
          userName,
          password,
          address,
          clientIdProof,
          subscriptionEndDate,
          subscriptionStartDate,
          phoneNo,
          country,
        })
        console.log(res)
        if(res.data.status){
            props.func();
        }
        else{
            console.log("Not send props")
        }

    }
    catch(error){
        console.log(error)
    }
    props.handleClose();
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActiveStep((nextStep) => nextStep + 1);
  
  };
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };
  const back = () => {
    navigate("/employees");
  };
  return (
    <div>
      {activeStep === 0 && (
        <div>
          {" "}
          <FormContainer>
            <ProgressBar now={25} label={25} />
            <Form className="formone">
              <Row className="mb-5">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    className="firstName"
                    type="text"
                    controlId="firstName"
                    placeholder="Enter First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={clientIdProof}
                    onChange={(e) => setClientIdProof(e.target.value)}
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
                    value={subscriptionStartDate}
                    onChange={(e) => setSubscriptionStartDate(e.target.value)}
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
                    value={subscriptionEndDate}
                    onChange={(e) => setSubscriptionEndDate(e.target.value)}
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
                    value={userType}
                    onChange={(e) => setUser(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    isInvalid={!!errors.address}
                  ></Form.Control>
                </Form.Group>{" "}
                <Form.Group
                  controlId="submit 
                "
                >
                  <br />
                  <Button
                    type="submit"
                    onClick={handleNext}
                    className="'my-2"
                    variant="success"
                  >
                    Next
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    type="submit"
                    // onClick={back}
                    className="'my-2"
                    variant="success"
                  >
                    Back
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </FormContainer>
        </div>
      )}
      {activeStep === 1 && (
        <div>
          {" "}
          <FormContainer>
            <ProgressBar now={50} label={50} />
            <br />
            <Container>
              {/* <Row>
              <Col lg={6}>
                {selectedCourse.map((item, key) => (
                  <ListGroup>
                    <ListGroup.Item>
                      &nbsp;&nbsp;&nbsp;
                      <Button
                        key={key}
                        value={item.key}
                        onClick={(e) => setCourse("course", e.target.innerText)}
                      >
                        {item.courseName}
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                ))}
              </Col>
              <Col lg={6}>
                <ListGroup>
                  <ListGroup.Item>{courses}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row> */}
              <h1>Fields not suggested</h1>
              <Row>
                <Form.Group
                  controlId="submit
                "
                >
                  <br />
                  <Button
                    type="submit"
                    onClick={handleNext}
                    className="'my-2"
                    variant="success"
                  >
                    Next
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    type="submit"
                    onClick={handleBack}
                    className="'my-2"
                    variant="success"
                  >
                    Cancel
                  </Button>
                </Form.Group>
              </Row>
            </Container>
          </FormContainer>
        </div>
      )}
      {activeStep === 2 && (
        <div>
          {" "}
          <FormContainer>
            <ProgressBar now={75} label={75} />
            <Form className="formone">
              <Row className="mb-5">
                {/* <Form.Group
                  controlId="firstName"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" First Name"
                    value={form.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    isInvalid={!!errors.firstName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="lastName"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    isInvalid={!!errors.lastName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="email"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    isInvalid={!!errors.email}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="lastAccessDate"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Last Access Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Last Access Date"
                    value={form.lastAccessDate}
                    onChange={(e) => setField("lastAccessDate", e.target.value)}
                    isInvalid={!!errors.lastAccessDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastAccessDate}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="creationDate"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Creation Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Creation Date"
                    value={form.creationDate}
                    onChange={(e) => setField("creationDate", e.target.value)}
                    isInvalid={!!errors.creationDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.creationDate}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="gender"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Select Gender</Form.Label>
                  <Form.Select
                    placeholder="select Gender"
                    value={form.gender}
                    Select
                    onChange={(e) => setField("gender", e.target.value)}
                    isInvalid={!!errors.gender}
                  >
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="language"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Language"
                    value={form.name}
                    onChange={(e) => setField("language", e.target.value)}
                    isInvalid={!!errors.language}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.language}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="password"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={form.name}
                    onChange={(e) => setField("password", e.target.value)}
                    isInvalid={!!errors.password}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="reTypepassword"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Re Enter password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re Enter password"
                    value={form.reTypepassword}
                    onChange={(e) => setField("reTypepassword", e.target.value)}
                    isInvalid={!!errors.reTypepassword}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.reTypepassword}
                  </Form.Control.Feedback>
                </Form.Group> */}
                <h1>Fields not suggested</h1>
                <Form.Group
                  controlId="submit
                "
                >
                  <br />
                  <Button
                    type="submit"
                    onClick={handleNext}
                    className="'my-2"
                    variant="success"
                  >
                    Next
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    type="submit"
                    onClick={handleBack}
                    className="'my-2"
                    variant="success"
                  >
                    Cancel
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </FormContainer>
        </div>
      )}
      {activeStep === 3 && (
        <div>
          {" "}
          <FormContainer>
            <ProgressBar now={100} label={100} />
            <Form className="formone">
              <Row className="mb-5">
                {/* <Form.Group
                  controlId="firstName"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=" First Name"
                    value={form.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    isInvalid={!!errors.firstName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="lastName"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    isInvalid={!!errors.lastName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="email"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    isInvalid={!!errors.email}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="lastAccessDate"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Last Access Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Last Access Date"
                    value={form.lastAccessDate}
                    onChange={(e) => setField("lastAccessDate", e.target.value)}
                    isInvalid={!!errors.lastAccessDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.lastAccessDate}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="creationDate"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Creation Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Creation Date"
                    value={form.creationDate}
                    onChange={(e) => setField("creationDate", e.target.value)}
                    isInvalid={!!errors.creationDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.creationDate}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="gender"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Select Gender</Form.Label>
                  <Form.Select
                    placeholder="select Gender"
                    value={form.gender}
                    Select
                    onChange={(e) => setField("gender", e.target.value)}
                    isInvalid={!!errors.gender}
                  >
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.gender}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="language"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Language"
                    value={form.name}
                    onChange={(e) => setField("language", e.target.value)}
                    isInvalid={!!errors.language}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.language}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="password"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={form.name}
                    onChange={(e) => setField("password", e.target.value)}
                    isInvalid={!!errors.password}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="reTypepassword"
                  as={Col}
                  md="6"
                  style={{ padding: 10 }}
                >
                  <Form.Label>Re Enter password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re Enter password"
                    value={form.reTypepassword}
                    onChange={(e) => setField("reTypepassword", e.target.value)}
                    isInvalid={!!errors.reTypepassword}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.reTypepassword}
                  </Form.Control.Feedback>
                </Form.Group> */}
                <h1>Fields not suggested</h1>
                <Form.Group
                  controlId="submit
                "
                >
                  <br />
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    className="'my-2"
                    variant="success"
                  >
                    Submit
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    type="submit"
                    onClick={handleBack}
                    className="'my-2"
                    variant="success"
                  >
                    Cancel
                  </Button>
                </Form.Group>
              </Row>
              <ToastContainer
                position="top-right"
                min-width="2%"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Form>
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ClientFormUpdate;
