import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FcApproval } from "react-icons/fc";
import { SiBookstack } from "react-icons/si";
import {FcOvertime} from  "react-icons/fc"
import './Card1.css'
import Modals from "./Modals";
import Modal1 from "./Modal1";
// import IoList from 'react-icons/io';

const LearnerCards = () => {

  return (
    <div >
      <Container fluid style={{ paddingLeft: "10px", paddingTop: "40px" }}>
      <div class="hstack gap-3"> 
        <Row   >
          
          <Col style={{padding:"10px"}} >
            <Card  
              className="box"
              align="center"
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                paddingLeft: "18px",
                borderRadius:"2rem",
                paddingTop:"12px"
              }}
            >
              <Card.Title style={{ color: "Green",paddingTop:"20px" }}>
                <h5 >
                  Assigned Courses <FcApproval />{" "}
                </h5>
              </Card.Title>
              <br></br>
              <p>
                <h3>
                <Modals/>  <SiBookstack />
                </h3>
              </p>
              <p style={{ color: "blue" }}> Confirmed</p>
            </Card>
          </Col>
          <Col  className="m-1">
          <Card
              className="box"
              align="center"
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                paddingLeft: "18px",
                borderRadius:"2rem",
                paddingTop:"12px"
              }}
            >
              <Card.Title style={{ color: "Green", paddingTop:"20px" }}>
                <h5 >
                  Pending Courses <FcApproval />{" "}
                </h5>
              </Card.Title>
              <br></br>
              <p>
                <h3>
                  <Modal1/><SiBookstack />
                </h3>
              </p>
              <p style={{ color: "blue" }}> Confirmed</p>
            </Card>
            </Col> 
          
            <Col className="m-1" >
            <Card
              className="box"
              align="center"
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                paddingLeft: "18px",
               borderRadius:"2rem",
               paddingTop:"12px"
              }}
            >
              <Card.Title style={{ color: "Green",paddingTop:"20px" }}>
                <h5 >
                  Completed Courses <FcApproval />{" "}
                </h5>
              </Card.Title>
              <br></br>
              <p>
                <h3>
                  02 <SiBookstack style={{color:"yellowgreen"}} />
                </h3>
              </p>
              <p style={{ color: "blue" }}> Confirmed</p>
            </Card>
            </Col>
          
            <Col className="m-1">
          <Card
              className="box"
              align="center"
              style={{
                width: "250px",
                height: "250px",
                margin: "10px",
                paddingLeft: "18px",
                borderRadius: '2rem',
                paddingTop:"12px",
               
              }}
            >
              <Card.Title style={{ color: "Green",paddingTop:"20px" }}>
                <h5 >
                  Tracking <FcApproval />{" "}
                </h5>
              </Card.Title>
              <br></br>
              <p>
                <h3>
                  47% <FcOvertime />
                </h3>
              </p>
              <p style={{ color: "blue" }}> Confirmed</p>
            </Card>
            </Col>
            
        </Row>
        </div >
      </Container>
     
    </div>
  );
  
  
};

export default LearnerCards;
