import React from "react";
import { useState } from "react";
import {
  Form,
  Button,
  ProgressBar,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import FormContainer from "./FormContainer";
import { useNavigate } from "react-router-dom";
import Course from "./Course";

const ClientForm = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(Course);
  const [courses, setCourses] = useState("");

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
      lastAccessDate,
      gender,
      language,
      lastName,
      firstName,
      email,
      creationDate,
      password,
      reTypepassword,
    } = form;

    const newErrors = {};
    if (!lastAccessDate || lastAccessDate === "")
      newErrors.lastAccessDate = "Please enter lastAccessDate";
    if (!creationDate || creationDate === "")
      newErrors.creationDate = "Please enter creationDate";
    // else if(calcAge(dob)<18) newErrors.dob ="Atlest 18 years"
    if (!gender || gender === "") newErrors.gender = "please select gender";
    if (!language || language === "") newErrors.language = "please enter name";
    if (!firstName || firstName === "")
      newErrors.firstName = "Please Enter First Name";
    if (!lastName || lastName === "")
      newErrors.lastName = "Please Enter Last Name";
    if (!email || email === "") newErrors.email = "Please Enter Email";
    if (!password || password === "")
      newErrors.password = "Please Enter password";
    if (reTypepassword !== password || reTypepassword === "")
      newErrors.reTypepassword = "Password do not Match";
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);
      console.log("form submitted");
      // console.log(form.value);
    }
  };

  // git
  
  // const handleCancel = () => {
  //   navigate("/employees");
  // };
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1);
    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //   setErrors(formErrors);
    // } else {
    //   setActiveStep((nextStep) => nextStep + 1);
    // }

    // i commented 
  };
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };
  const back = () => {
    navigate("/employees");
  };
  const course = Course;
  // console.log(course);
  const courseArray = [];
  const selectedcourse = (e) => {
    // console.log(selectedCourse)
    console.log(e.target.value);
   // const newCourse = [...selectedCourse,e.target.innerText]
   // setSelectedCourse(newCourse);
  // console.log(newCourse)
  // setCourses(newCourse)
   const newCourse = selectedCourse.filter((item, index) => {

      if (item.key == e.target.value) {
        console.log(item.courseName);
        courseArray.push(item.courseName);
        setCourses(item.courseName);
        console.log(courseArray);

        console.log(courseArray1);
      } else {
        console.log("hii");
      }
   });
  };
  let courseArray1 = [];
  //courseArray.push(courses)
  courseArray1 = [...courseArray, courseArray];
console.log(courseArray1)
console.log(courses)
  return (
    <div className="scroll">
      {activeStep === 0 && (
        <div>
          {" "}
          <ProgressBar now={25} label={25} />
          <Form className="formone">
            <Row className="mb-5">
              <Form.Group
                as={Col}
                md="6"
                style={{ padding: 10 }}
                controlId="firstName"
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
              </Form.Group>
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
        </div>
      )}
      {activeStep === 1 && (
        <div>
          {" "}
          
          <Container>
            <Row>
              <Col lg={6}>
                {selectedCourse.map((item, key) => (
                  <ListGroup>
                    <ListGroup.Item key={key}>
                      
                      &nbsp;&nbsp;&nbsp;
                      <Button onClick={selectedcourse} value={item.key}>
                      {item.courseName}
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                ))}
              </Col>
              <Col lg={6}>
                <ListGroup>
                  <ListGroup.Item>{courses}</ListGroup.Item>
                  <ListGroup.Item>{courses}</ListGroup.Item>
                  <ListGroup.Item>{courses}</ListGroup.Item>
                  <ListGroup.Item>{courses}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
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
        </div>
      )}
      {activeStep === 2 && (
        <div>
          {" "}
          <FormContainer>
            <ProgressBar now={75} label={75} />
            <Form className="formone">
              <Row className="mb-5">
                <Form.Group
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
                </Form.Group>
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
                <Form.Group
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
                </Form.Group>
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
            </Form>
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ClientForm;
