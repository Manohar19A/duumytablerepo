import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import { Table } from 'react-bootstrap';

 const TableTwo = () => {
  return (
    <div>
            <Card>
                <h4 align="center"> Courses in Drafts/Pending</h4>
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
                            <td>Pending</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>React</td>
                            <td>Drafts</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>java</td>
                            <td>Pending</td>

                        </tr>

                    </tbody>
                </Table>
            </Card>
        </div>
  )
};
 export default TableTwo;
