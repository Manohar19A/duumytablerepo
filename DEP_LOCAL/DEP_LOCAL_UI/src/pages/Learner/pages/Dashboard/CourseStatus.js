
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'
import {GrDownload} from 'react-icons/gr';
import {FcCalendar} from 'react-icons/fc';
import {FcBullish} from 'react-icons/fc';
import {RiEdit2Line} from 'react-icons/ri';
const CourseStatus = () =>{
    return (
      <div>
        
      <Card>
      <h4  align="center"  style={{color:"orange"}} > Course Details</h4>
      <Table  bordered hover>
<thead>
  <tr>
    <th>Serial No.</th>
    <th>Course Name</th>
    <th>Course Start Date &nbsp; <FcCalendar/></th>
    <th>Course End Date &nbsp;<FcCalendar/></th>
    <th>Progress <FcBullish/></th>
    {/* <th><GrDownload/></th> */}
    
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
    
</tbody>
</Table>
</Card>

        </div>
    )
}
export default CourseStatus