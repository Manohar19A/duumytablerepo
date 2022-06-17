import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import Editable from "./BranchCreation";

// Testing purpose
const BranchCreationMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title> Branches</Card.Title>

            <Container>
              <Row>
                <Col xs={12}>
                  <Editable />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};

export default BranchCreationMain;
