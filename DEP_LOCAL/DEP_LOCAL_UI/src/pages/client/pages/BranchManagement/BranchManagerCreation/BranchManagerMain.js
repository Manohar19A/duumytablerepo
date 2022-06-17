import React from "react";
import { Card, Container } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";

import BranchManagerModal from "./BranchManagerModal";
import BranchManagerTable from "./BranchManagerTable";

function BranchManagerMain() {
  return (
    <div> 
        <Row>
          <Col xs={6} md={8}>
            <Card.Body>
             
            </Card.Body>
          </Col>
          <Col xs={6} md={4}>
            <BranchManagerModal />
          </Col>
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <BranchManagerTable/>
        </Row>
      
    </div>
  );
}

export default BranchManagerMain;
