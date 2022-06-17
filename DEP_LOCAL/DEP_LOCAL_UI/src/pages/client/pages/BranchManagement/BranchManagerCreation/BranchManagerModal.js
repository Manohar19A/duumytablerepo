import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function BranchManagerModal() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const notif=()=>toast();

  const handleClose = () => setShow();
  const handleShow = () => setShow(true);

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
    const { name, branchName, email, loginUserName, password, country, state } =
      form;
    const newErrors = {};

    if (!name || name === "" || !name.match(/^[aA-zZ\s]+$/))
      newErrors.name = "Please Enter  your name";
    if (!branchName || branchName === "" || !branchName.match(/^[aA-zZ\s]+$/))
      newErrors.branchName = "Please Enter Branchname";
    if (!email || email === "") newErrors.email = "Please Enter Email";

    if (!loginUserName || loginUserName === "")
      newErrors.loginUserName = "Please Enter login username";

    if (!password || password === "")
      newErrors.password = "Please Enter password";

    if (!country || country === "") newErrors.country = "Please Enter country";
    if (!state || state === "") newErrors.state = "Please Enter state";

    return newErrors;
  };
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);
      // console.log("form submitted");

      axios
        .post("/branchAdmin/saveBranchAdmin", form)
        .then((res) => {
          console.log(res.data);
          notify();
          toast.success("Submitted");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    }
  };
  // console.log(form.dateOfJoining)

  const [branches, setBranches] = useState([]);
  useEffect(() => {
    axios
      .get("/branch/getAllBranches")
      .then((response) => {
        setBranches(response.data);
        console.log(branches);
      })
      .catch(() => {

        toast.error("data is not getting");
      });
    // console.log(departments)
  }, []);

  return (
    <div>
      {/* <Button
        onClick={handleShow}
        style={{ backgroundColor: "#9FD5E2", float: "right",marginLeft:"100px",borderRadius:'29px',paddingTop:"9px" }}
      >
        <h4 style={{color: 'black'}}>Add Leave</h4>   </Button> */}

      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          float: "right",
          borderRadius: "25px",
          paddingBottom: "11.5px",
          paddingTop: "11.5px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add New Onboard
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>OnBoarding Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-5">
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label> Name</Form.Label>
                <Form.Control
                  required
                  className="Name"
                  name="name"
                  type="text"
                  controlId="name"
                  placeholder=" Name"
                  // onChange={(event) => setFirstName(event.target.value)}
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  isInvalid={!!errors.name}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Branch Name</Form.Label>

                <Form.Select
                  required
                  type="text"
                  placeholder="BranchName"
                  controlId="branchName"
                  value={form.branchName}
                  onChange={(e) => setField("branchName", e.target.value)}
                  isInvalid={!!errors.branchName}
                >
                  <option>Select </option>

                  {branches.map((branch) => (
                    <option>{branch.branchName}</option>
                  ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.branchName}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  name="email"
                  type="text"
                  controlId="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Login UserName</Form.Label>
                <Form.Control
                  required
                  name="loginUserName"
                  type="text"
                  placeholder="Login UserName "
                  controlId="loginUserName"
                  value={form.loginUserName}
                  onChange={(e) => setField("loginUserName", e.target.value)}
                  isInvalid={!!errors.loginUserName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.loginUserName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="Password"
                  placeholder="Password"
                  controlId="password"
                  value={form.password}
                  onChange={(e) => setField("password", e.target.value)}
                  isInvalid={!!errors.password}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="country"
                  type="text"
                  controlId="country"
                  placeholder="Country"
                  value={form.country}
                  onChange={(e) => setField("country", e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  name="state"
                  type="text"
                  placeholder="State"
                  controlId="state"
                  value={form.state}
                  onChange={(e) => setField("state", e.target.value)}
                  // onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>UserType</Form.Label>
                <Form.Control
                  required
                  name="userType"
                  type="text"
                  placeholder="UserType"
                  controlId="userType"
                  value={form.userType}
                  onChange={(e) => setField("userType", e.target.value)}
                  // onChange={changeHandler}
                />
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
            <Button
              style={{ backgroundColor: "#eb4509", float: "right" }}
              type="submit"
              onClick={handleClose}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default BranchManagerModal;
