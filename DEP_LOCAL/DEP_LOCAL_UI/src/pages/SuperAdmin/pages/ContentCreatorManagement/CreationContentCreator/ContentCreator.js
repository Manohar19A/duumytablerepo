import React, { useEffect, useRef, useState } from "react";
import { Card, Container, FormSelect } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./ContentCreator.css";

import axios from "../../../../../Uri"
import { toast } from "react-toastify";





// import "react-toastify/dist/ReactToastify.css";





const ContentCreator = () => {

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
            firstName,
            lastName,
            email,
            phoneNumber,
            userName,
            password,
            address,
            country,
            dateOfJoining,

        } = form;

        const newErrors = {};

        // validations for forms



        if (!firstName || firstName === "" || !firstName.match(/^[aA-zZ\s]+$/))
            newErrors.firstName = "Please Enter First Name";

        if (!lastName || lastName === "" || !lastName.match(/^[aA-zZ\s]+$/))
            newErrors.lastName = "Please Enter Last Name";

        if (!email || email === "") newErrors.email = "Please Enter valid Email";

        if (!phoneNumber || phoneNumber === "" || !phoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
            newErrors.phoneNumber = "Please Enter valid Phone Number";

        if (!dateOfJoining || dateOfJoining === "")
            newErrors.dateOfJoining = "Please Enter Date of Joining";

        if (!country || country === "") newErrors.country = "Please Enter Country";

        if (!password || password === "")
            newErrors.password = "password cannot be empty";

        if (!address || address === "") newErrors.address = "Please Enter Address";

        if (!userName || userName === "") newErrors.userName = "Please Enter User name";

        return newErrors;
    };
    //testing for commit



    // const {register,handleSubmit,reset,formState}= useForm(formOptions)



    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        const Url = "/superAdmin/addContentCreator";
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log(form);
            console.log("form submitted");




// using axios  method for posting data.


            axios.post(Url, form)
                .then((response) => {
                    const user = response.data;
                    // toast.success("data submitted successfully")
                    alert("Data submitted successfully")
                    console.log(user);
                })
                .catch((err) => {
                    // toast.error("Something Went Wrong") 
                    alert("Unable to Send Data, Error!")
                })
        }
    };

   


    // ** using useEffect  method for posting data.**
    // **NOTE: WE should not use useEffect for posting data,
    // because whenever component is loaded it will automatically call useEffect and post empty data 
    
    
    // const [countries, setCountries] = useState([])
    // useEffect(() => {
    // axios.post("/superAdmin/addContentCreator")
    // .then((response) => {
    // setDesignations(response.data)

    // })
    // .catch(() => { toast.error("Unable to Send Data") })
    // }, [])





 // ** using useEffect  method for getting data.**
    // const [departments, setDepartments] = useState([])
    // useEffect(() => {
    // axios.get("/dept/getAllDepartments")
    // .then((response) => {
    // setDepartments(response.data)
    // })
    // .catch(() => { toast.error("data is not getting") })
    // console.log(departments)
    // }, [])





    return (
        //  <pre>{JSON.stringify(form)}</pre>
        <div>

            <Container>

                <Row>

                    <Col>

                        {/* Form kept inside card  */}
                        <Card style={{ marginTop: 10 }}>
                            <Card.Header>
                                <Card.Body>
                                    {/* <Card.Title className="titl" style={{ color: 'darkgreen' }}>   Content Creator </Card.Title> */}
                                    <Card.Subtitle className="titl" align="center" style={{ fontSize: "1.5rem", color: 'royalblue' }}>
                                        " Content Creator Form"
                                    </Card.Subtitle>

                                    <br />

                                    {/* form for creating Content creator */}
                                    <Form ref={forms} className="formone"
                                        // noValidate
                                        // validated={validated}
                                        style={{ padding: 10 }}
                                        onSubmit={handleSubmit}
                                    >


                                        <Row className="mb-5">

                                            {/* First name */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    required
                                                    className="firstName"
                                                    type="text"
                                                    controlId="firstName"
                                                    placeholder="First name ' "
                                                    // onChange={(event) => setFirstName(event.target.value)}
                                                    value={form.firstName}
                                                    onChange={(e) => setField("firstName", e.target.value)}
                                                    isInvalid={!!errors.firstName}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.firstName}
                                                </Form.Control.Feedback>
                                            </Form.Group>


                                            {/* Last name  */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    required
                                                    name="last_name"
                                                    type="text"
                                                    controlId="lastName"
                                                    placeholder="Last name '"
                                                    value={form.lastName}
                                                    onChange={(e) => setField("lastName", e.target.value)}
                                                    isInvalid={!!errors.lastName}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.lastName}
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>


                                            {/* email  */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Email of '"
                                                    controlId="email"
                                                    value={form.email}
                                                    onChange={(e) => setField("email", e.target.value)}
                                                    isInvalid={!!errors.email}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>


                                            {/* Phone number */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Phone No.</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="  Phone Number"
                                                    controlId="phoneNumber"
                                                  value={form.phoneNumber}
                                                    onChange={(e) => setField("phoneNumber", e.target.value)}
                                                    isInvalid={!!errors.phoneNumber}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.phoneNumber}
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>



                                            {/* date of joininig */}

                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Date of Joining</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="date"
                                                    placeholder="Joining Date"
                                                    controlId="dateOfJoining"
                                                    value={form.dateOfJoining}
                                                    onChange={(e) => setField("dateOfJoining", e.target.value)}
                                                    isInvalid={!!errors.dateOfJoining}
                                                ></Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.dateOfJoining}
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>



                                           


                                            {/* country */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Country"
                                                    controlId="country"
                                                    value={form.country}
                                                    onChange={(e) => setField("country", e.target.value)}
                                                    isInvalid={!!errors.country}>

                                                </Form.Control>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>



                                            {/* user name */}

                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control
                                                    name="User_Name"
                                                    type="text"
                                                    controlId="userName"
                                                    placeholder="UserName"
                                                    value={form.userName}
                                                    onChange={(e) => setField("userName", e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>



                                            {/* password */}
                                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Password "
                                                    controlId="password"
                                                    value={form.password}
                                                    onChange={(e) => setField("password", e.target.value)}
                                                    isInvalid={!!errors.password}
                                                >
                                                </Form.Control>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.password}
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>



                                            {/* address */}

                                            <Form.Group as={Col} md="6" height="10rem" style={{ padding: 10, }}>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="textarea"
                                                    style={{ height: '80px' }}
                                                    placeholder="Address of 'Content creator' "
                                                    controlId="address"
                                                    value={form.address}
                                                    onChange={(e) => setField("address", e.target.value)}
                                                    isInvalid={!!errors.address}></Form.Control>
                                            </Form.Group>

                                        </Row>

                                        {/* submit button */}
                                        <Button className="btnn" variant='warning' style={{ color: "#F4F8F6", backgroundColor: "#FF9B44 ", float: "right", width: "10rem" }} type="submit"  >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card.Header>
                        </Card>

                    </Col>



                </Row>
            </Container>
        </div>






    );
};





export default ContentCreator;