import React from "react";
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import {FcCalendar} from 'react-icons/fc';
import {GrDownload} from 'react-icons/gr';
import {FcBullish} from 'react-icons/fc'
import {RiEdit2Line} from 'react-icons/ri'
const LearnerCourses = () => {
  return (
<div>
      <Card>
        <h4 align="center" style={{backgroundColor:"yellowgreen"}}> Course Details</h4>
      <Table striped bordered hover>
<thead>
  <tr>
    <th>Serial No.</th>
    <th>Course Name</th>
    <th>Course Start Date &nbsp;&nbsp; <FcCalendar /></th>

    <th>Course End Date &nbsp;&nbsp;<FcCalendar/></th>
    <th>Progress &nbsp; &nbsp;<FcBullish/></th>
    {/* <th><GrDownload/></th> */}
    {/* <th><RiEdit2Line/></th> */}
  </tr>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td>python</td>
        <td>02/05/2022</td>
        <td>02/08/2022</td>
        <td>45%</td>
    </tr>
    <tr>
        <td>2</td>
        <td>React</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        
        <td>25%</td>
    </tr>
    <tr>
        <td>3</td>
        <td>java</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>26%</td>
    </tr>
    <tr>
        <td>4</td>
        <td>React-bootstrap</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Javascript</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Mysql</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Ubuntu</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>8</td>
        <td>AutoCad</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>9</td>
        <td>React-native</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>0%</td>
    </tr>
    <tr>
        <td>10</td>
        <td>C++</td>
        <td>04/05/2022</td>
        <td>04/07/2022</td>
        <td>06%</td>
    </tr>
   
</tbody>
</Table>
</Card>
    </div>
  );
};

export default LearnerCourses;
