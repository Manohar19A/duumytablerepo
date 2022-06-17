import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Redux/Counter";



const App = () => {
  // redux addeed
   // redux addeed
  return (
    
    <div className="AppComponent">
      <Container-fluid>
        <Row>
          <Col>
            <Routes/>
            
            {/* <Counter/> */}
          </Col>
        </Row>
      </Container-fluid>
    </div>
   
  );
};

export default App;
