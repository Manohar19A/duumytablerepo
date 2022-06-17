import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import TableTwo from './TableTwo';
import CourseStatus from './TableOne';
import { SiCoursera } from 'react-icons/si';
import { MdPending } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdOutlineDrafts } from 'react-icons/md';


const Index = () => {
  return (
    <div className='scroll'>

      <Container>
        <Row style={{ paddingTop: "10px" }}>
          <Col xl={4}>
            <Card className="box" style={{ width: '18rem', height: "170px", backgroundColor: "#FFFAF0", borderRadius: "20px", boxShadow: "5px  5px 2px " }}>
              <Card.Body>
                <Card.Header style={{ backgroundColor: "#FFFAF0", fontSize: "22px", paddingLeft: "40px" }}>Total Courses<SiCoursera /></Card.Header>


                <h3 style={{ paddingLeft: "110px", paddingTop: "20px" }}>44</h3>
                <p style={{ paddingLeft: "140px" }}>read more<BsArrowRightShort /></p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="box" style={{ width: '18rem', height: "170px", backgroundColor: "#FFFAF0", borderRadius: "20px", boxShadow: "5px  5px 2px " }} >
              <Card.Body>
                <Card.Header style={{ backgroundColor: "#FFFAF0", fontSize: "22px", paddingLeft: "40px" }}>Pending Courses<MdPending /></Card.Header>
                <h3 style={{ paddingLeft: "110px", paddingTop: "20px" }}>16</h3>
                <p style={{ paddingLeft: "140px" }}>read more<BsArrowRightShort /></p>

              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card className="box" style={{ width: '18rem', height: "170px", backgroundColor: "#FFFAF0", borderRadius: "20px", boxShadow: "5px  5px 2px " }}>
              <Card.Body>
                <Card.Header style={{ backgroundColor: "#FFFAF0", fontSize: "22px", paddingLeft: "40px" }}>Course Drafts<MdOutlineDrafts /></Card.Header>


                <h3 style={{ paddingLeft: "110px", paddingTop: "20px" }}>55</h3>
                <p style={{ paddingLeft: "140px" }}>read more<BsArrowRightShort /></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col xl={12}>
            <CourseStatus/>
          </Col>

        </Row>
        <br />
        <br />
        <Row>
          <Col xl={12}>
            <TableTwo />
          </Col>
        </Row>
      </Container>
    </div>
  )
};
export default Index;
