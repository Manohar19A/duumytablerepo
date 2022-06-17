
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import Table from 'react-bootstrap/Table';
import { FcPlus } from "react-icons/fc";
import { GrDownload } from "react-icons/gr";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import {FiMapPin} from "react-icons/fi";
import {AiOutlineDollar} from "react-icons/ai";
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FcBullish, FcKey ,FcCalendar} from "react-icons/fc";
import { FcSportsMode, FcReading, FcReadingEbook } from "react-icons/fc";

const Tablee = (props) => {
    return (
        <div style={{ paddingTop: '50px' }}>
            {/* Learner's Details Table */}
            <Container style={{ width: '70rem' }}>
                <Card >
                    <Card.Header align='center' style={{backgroundColor:'white' ,color:"orangered"}}> Learner's Details</Card.Header>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Learner's Name </th>
                                <th>Learner's Id &nbsp;&nbsp;  <FcKey  style={{ fontSize:'22px' }}/></th>
                                <th>Course Assigned </th>
                                <th>Learner's Contact &nbsp;&nbsp; <FcCallback style={{ fontSize:'22px' }} /> </th>
                                <th>Learner's Address &nbsp;&nbsp; <FiMapPin style={{ fontSize:'22px' }}/></th>
                                {/* <th><GrDownload/></th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Manohar</td>
                                <td>Mr001</td>
                                <td>React Js</td>
                                <td>+60 (12) 211-2970 </td>
                                <td>Setapa, malaysia ,533008</td>
                            </tr>
                            <tr>
                                <td>Chetan</td>
                                <td>Ch009</td>
                                <td>JavaScript</td>
                                <td>+60 (12) 211-1340 </td>
                                <td>Batu Caves ,68100 ,Cheras , Kuala Lumpur</td>
                            </tr>
                            <tr>
                                <td>Chiranjeevi</td>
                                <td>Ch007</td>
                                <td>React Native</td>
                                <td>+60 (12) 211-9853 </td>
                                <td>putrajaya , malaysia</td>
                            </tr>
                            <tr>
                                <td>Veda</td>
                                <td>Vd001</td>
                                <td>java</td>
                                <td>+60 (12) 211-2208</td>
                                <td>putrajaya , malaysia</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>


            {/* Course details table */}
            <Container style={{ width: '70rem' , marginTop:'50px' }}>
                <Card >
                    <Card.Header align='center'style={{backgroundColor:'white' ,color:"green"}}> Course Details</Card.Header>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Course Name </th>
                                <th>Course Id</th>
                                <th>Course Amount &nbsp;&nbsp; <FcCurrencyExchange style={{ fontSize:'22px' }} /> </th>
                                <th>Course Duration &nbsp;&nbsp; <FcOvertime  style={{ fontSize:'22px' }}/></th>
                                {/* <th><GrDownload/></th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>React Js</td>
                                <td>React0312</td>
                                <td>700 RM</td>
                                <td>60 Hrs</td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td>Js01</td>
                                <td>590 RM </td>
                                <td>45 Hrs</td>
                            </tr>
                            <tr>
                                <td>React Native</td>
                                <td>RctNt01</td>
                                <td> 999 RM </td>
                                <td>75 Hrs</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Jv01</td>
                                <td>990 RM</td>
                                <td>+60 Hrs</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>

            {/* Payment info table  */}

            <Container style={{ width: '70rem' , marginTop:'50px' }}>
                <Card >
                    <Card.Header align='center' style={{backgroundColor:'white' ,color:"blue"}}> Payment Info</Card.Header>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Amount Paid &nbsp;&nbsp;<AiOutlineDollar style={{ fontSize:'22px' }}/>  </th>
                                <th>Payment Date &nbsp;&nbsp;<FcCalendar style={{ fontSize:'22px' }}/></th>
                                <th>Payment Id &nbsp;&nbsp;  </th>
                                <th> Course Id</th>
                                {/* <th><GrDownload/></th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>999 RM</td>
                                <td>01/06/2022</td>
                                <td>Uid-06731114</td>
                                <td>React0312</td>
                            </tr>
                            <tr>
                                <td>590 RM </td>
                                <td>09/06/03</td>
                                <td>Uid-06737586</td>
                                <td>Js01</td>
                            </tr>
                            <tr>
                                <td> 999 RM</td>
                                <td>12/11/2022</td>
                                <td> Uid-06731164732 </td>
                                <td>React0312</td>
                            </tr>
                            <tr>
                                <td>990 RM</td>
                                <td>13/06/2022</td>
                                <td> Uid-0695836</td>
                                <td>Jv01</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>

        </div>
    )
}
export default Tablee;