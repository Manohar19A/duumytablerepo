import React from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card';
const LearnerTable = () => {



  return (

    <div>
        <Card>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Serial No.</th>
      <th>Course Name</th>
      <th>Course Price</th>
      <th>Number of Users</th>
      <th>About Course</th>
      <th>User Rating</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td>1</td>
          <td>python</td>
          <td>4500</td>
          <td>1500</td>
          <td>Good</td>
          <td>9</td>
      </tr>
      <tr>
          <td>2</td>
          <td>React</td>
          <td>4000</td>
          <td>100</td>
          <td>Good</td>
          <td>8</td>
      </tr>
      <tr>
          <td>3</td>
          <td>java</td>
          <td>4500</td>
          <td>1200</td>
          <td>Good</td>
          <td>8</td>
      </tr>
    
  </tbody>
</Table>
</Card>
    </div>
  )
}

export default LearnerTable;