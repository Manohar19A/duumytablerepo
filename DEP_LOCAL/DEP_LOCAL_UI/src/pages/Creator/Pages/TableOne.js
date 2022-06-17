import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

const CourseStatus = () => {
    return (
        <div>
            <Card>
                <h4 align="center"> Courses Summary</h4>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Course Name</th>
                            <th>Course Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>python</td>
                            <td>Approved</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>React</td>
                            <td>Approved</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>java</td>
                            <td>Rejected</td>

                        </tr>

                    </tbody>
                </Table>
            </Card>
        </div>
    )
}
export default CourseStatus