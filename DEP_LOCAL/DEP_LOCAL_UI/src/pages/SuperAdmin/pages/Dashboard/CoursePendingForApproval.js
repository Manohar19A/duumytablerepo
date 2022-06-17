import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import { BsCheck2Square } from 'react-icons/bs';
import { FcReading } from 'react-icons/fc';

const CoursePendingForAprroval = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
    <Container >
        <Row>
            <Col>
                <Card style={{  color: 'black', paddingLeft: '1px', fontSize: '20px' }} >
                    <Card.Header align='center' style={{backgroundColor:"white" , color:"orangered"}}>Course Summary Approved and Rejected</Card.Header>

                </Card>
            </Col>

        </Row>
        <Row>
            <Col>
                <table class="table table-bordered" style={{backgroundColor:"white"}} >
                    <thead>
                        <tr>
                            <th scope="col" align='center'>Course ID</th>
                            <th scope="col" align='center'>Course Name &nbsp;   <FcReading  style={{ fontSize: '25px' }}/></th>
                            
                            <th scope="col" align='center'>Course Status &nbsp;<BsCheck2Square style={{ fontSize: '20px' }}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" align='center'>1</th>
                            <td>Basics of React</td>
                            <td >Approved</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>2</th>
                            <td>React and Its Advantages</td>
                            <td >Approved</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>3</th>
                            <td>Basics of JavaScript</td>
                            <td style={{backgroundColor:"#FF7F7F"}}>Rejected</td>

                        </tr>

                        <tr>
                            <th scope="row" align='center'>1</th>
                            <td>Java</td>
                            <td >Approved</td>

                        </tr>
                    </tbody>
                </table>
            </Col>


        </Row>
    </Container>
</div>
  )
}
export default CoursePendingForAprroval