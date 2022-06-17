// import React from 'react';
// // import 'antd/dist/antd.css';
// // import './Card.css';
// // import { Card, Progress } from 'antd';
// //import CircularBar from '../CircularProgressBar/CircularBar';
// import { IoList } from "react-icons/io5";
// import { GrMapLocation } from "react-icons/gr";
// //import { BsCheck2Circle } from 'react-icons/bs';
// import { FcOk } from 'react-icons/fc';
// import {ImWarning} from 'react-icons/im';
// import {HiDotsHorizontal} from 'react-icons/hi';
// import { Button, Col, Container, Row,Card } from 'react-bootstrap';

import { Card, Col, Container, Row } from "react-bootstrap"
import './ClientCard.css';
import { FcApproval } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';
import { FcReading } from 'react-icons/fc';

const Cardd = () => {
    return (
        <div >
            <Container>

                <Row md={3} >

                    <Col >
                        <div style={{ paddingLeft: "150px" }} xs={1} md={2} sm={2} className="g-4">
                            {/* card component for Client Dashboard */}
                            <Card className='box' align="center"
                                style={{
                                    width: '350px',
                                    
                                    height: '210px',
                                    borderRadius: "10px",
                                    margin: '30px',
                                    paddingTop: "20px",
                                    marginTop: '30px'
                                }}>
                                <Card.Header style={{ backgroundColor: "white" }}>
                                    <h5>Total Learners <FcApproval /> </h5>
                                </Card.Header><br></br>
                                <p><h3>40 <FcManager /></h3></p>
                                <p style={{ color: "blue" }}> Confirmed</p>
                            </Card>
                        </div>
                    </Col>



                    {/* second card  */}

                    <Col >
                        <div style={{ paddingLeft: "150px" }} >
                            {/* card component for Client Dashboard */}
                            <Card className='box' align='center' style={{
                                width: '350px',
                                height: '210px',
                                borderRadius: "10px",
                                margin: '30px',
                                paddingTop: "20px",
                                marginTop: '30px'
                            }}>
                                <Card.Header style={{ backgroundColor: "white" }}>
                                    <h5> Total Courses Subscribed  <FcApproval /></h5>
                                </Card.Header ><br></br>
                                <p><h3> 3 <FcReading /></h3></p>
                                <p style={{ color: "orange" }}> Courses Subscribed </p>
                            </Card>
                        </div>
                    </Col>

                    {/* </Col> */}
                </Row>

            </Container>





        </div>


    )
}
export default Cardd;

// const Cardd = () => (
//   <>
//     <div>
//       {/* first container for screen1 */}
//       <Container>
//         <Row className='crd'>
//           {/* put each card in col for allignment */}
//           <Col >
//             <Card className='box' size="small" title="Moving Vehicle" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto', height: 'auto' }}>
//              {/* this row is within single card */}
//               <Row >
//                 <Col><p><h3>327</h3></p>

//                   {/* color for text */}
//                   <p style={{ color: "green" }}>Running</p> </Col>

//                 {/* Circular progress bar */}
//                 {/* <Col >
//                   <p style={{ width: 4, size: "small" }}>
//                     <Progress type="circle" percent={52} width={65} strokeColor='#87d068' />
//                   </p></Col>
//                 strokeWidth='10px' for circle width */}

//               </Row>

//             </Card>
//           </Col>

//           <Col>
//             <Card className='box' size="small" title="Idle Vehicle" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto', height: 'auto', minWidth: '30px' }}>
//               <Row>
//                 <Col><p><h3>50</h3></p>

//                   {/* color for text */}
//                   <p style={{ color: "Orange" }}>Idle</p> </Col>

//                 {/* Circular progress bar */}
//                 {/* <Col>
//                   <p style={{ width: 5, size: "small" }}>
//                     <Progress type="circle" percent={20} width={65} strokeColor='#FFA500' />
//                   </p></Col> */}
//                 {/* strokeWidth='10px' for circle width */}

//               </Row>

//             </Card>
//           </Col>

//           <Col>
//             <Card className='box' size="small" title="Stopped Vehicle" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto', height: 'auto', minWidth: '30px' }}>
//               <Row>
//                 <Col><p><h3>43</h3></p>

//                   {/* color for text */}
//                   <p style={{ color: "red" }}>Stopped</p> </Col>

//                 {/* Circular progress bar */}
//                 {/* <Col>
//                   <p style={{ width: 5, size: "small" }}>
//                     <Progress type="circle" percent={15} width={65} strokeColor='#ff0000' />
//                   </p></Col> */}
//                 {/* strokeWidth='10px' for circle width */}

//               </Row>

//             </Card>
//           </Col>

//           <Col>
//             <Card className='box' size="small" title="Other Vehicle" extra={<a href="#"><IoList />     <GrMapLocation /></a>} style={{ width: 'auto', height: 'auto', shadow: '10px', minWidth: '20px' }}>
//               <Row>
//                 <Col><p><h3>25</h3></p>

//                   {/* color for text */}
//                   <p style={{ color: "gold" }}>Other</p>  </Col>

//                 {/* Circular progress bar */}
//                 {/* <Col>
//                   <p style={{ width: 5, size: "small" }}>
//                     <Progress type="circle" percent={6} width={65} strokeColor=' #FFCF36' />
//                   </p></Col> */}
//                 {/* strokeWidth='10px' for circle width */}

//               </Row>

//             </Card>
//           </Col>

//           <Col>
//             <Card className='box' size="small" title="Inactive Vehicles" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto', height: 'auto' }}>
//               <Row>
//                 <Col><p><h3>15</h3></p>

//                   {/* color for text */}
//                   <p style={{ color: "grey" }}>Inactive</p> </Col>

//                 {/* Circular progress bar */}
//                 {/* <Col>
//                   <p style={{ width: 5, size: "small" }}>
//                     <h1> <Progress type="circle" percent={7} width={65} strokeColor='#000000' /></h1>
//                   </p></Col> */}
//                 {/* strokeWidth='10px' for circle width */}

//               </Row>

//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>




//     {/* Second row cards */}
//     {/* Ongoing Trips card screen 1 */}
//     <Container>
//       <Row>
//         <Col sm={6} >
//           <div >
//             <Card title="Ongoing Trips" extra={<a href="#">  </a>} style={{ height: 'auto', width: "auto" }}>

//               <p><h3>15</h3></p>

//               {/* color for text */}
//               <p style={{ color: "#808080" }}>W432342   (Group name, Sameer k, Truck) </p>
//               <p style={{ color: "#808080" }}>  Xyz Transports   </p>

//               {/* Circular progress bar */}
//               {/* <p style={{ width: 5 }} size="small" >
//                 <Progress type="circle" percent={83} width={40} strokeColor='#808080' />
//               </p> */}

//               <p style={{ color: "#808080" }}>  Location A   </p>
//               <p style={{ color: "#808080" }}>  14th Dec 22, 7:00am  </p>

//               <p style={{ color: "#808080" }}>W432342   (Group name, Sameer k, Truck) </p>
//               <p style={{ color: "#808080" }}>  Xyz Transports   </p>

//               <p style={{ color: "#808080" }}>  Location A   </p>
//               <p style={{ color: "#808080" }}>  14th Dec 22, 7:00am  </p>

//             </Card>
//           </div>
//         </Col>

//         {/* Panic Status card */}



//         <Col  >
//         <div >
//             <Card size="small" title="Panic Status" extra={<a href="#"> <HiDotsHorizontal/> </a>} style={{ height: 'auto', width: "auto" }}>
//               <Row>
//                 <Col><p style={{ color: "#808080" }}><h2>   <FcOk />       5         </h2></p></Col>
//                 <p style={{ color: "#808080" }}><h2>          Resolved        </h2></p>

//                 <Col><p style={{ color: "#808080" }}><h2>   <ImWarning/>     2       </h2></p> </Col>
//                 <p style={{ color: "#808080" }}><h2>          Pending       </h2></p>

//                 <Col><p style={{ color: "#808080" }}><h2>    7  </h2></p> </Col>
//                 <p style={{ color: "#808080" }}><h2>          Total        </h2></p>

//                 {/* <Button style={{width:150}, align:"right"}}>  <a href='#'> View </a></Button> */}
//               </Row>
//             </Card>
//             </div>
//         </Col>



//         {/* Todays alarm card */}


//         <Col  >
//         <div >
//             <Card size="small" title="Today Alarm" extra={<a href="#"> <HiDotsHorizontal/> </a>} style={{ height: 'auto', width: "auto" }}>
//               <Row>
//                 <Col>
//                 <h6> <p  style={{ color: "blue" }}> Ignition (14) </p> </h6>
//                <h6> <p style={{ color: "red" }}> Unplugged (8) </p> </h6>
//                 <h6> <p style={{ color: "green" }}> GPRS Coonnectivity (7) </p> </h6>
//                 </Col>

//                 <Col>
//                <h6> <p style={{ color: "purple" }}> Long Halt (7) </p></h6>
//                <h6> <p style={{ color: "orange" }}> Power Restore (3) </p> </h6>

//                 </Col>


//                 {/* <Col><p style={{ color: "#808080" }}><h2>   <FcOk />       5         </h2></p></Col>
//                 <p style={{ color: "#808080" }}><h2>          Resolved        </h2></p>

//                 <Col><p style={{ color: "#808080" }}><h2>   <ImWarning/>     2       </h2></p> </Col>
//                 <p style={{ color: "#808080" }}><h2>          Pending       </h2></p>

//                 <Col><p style={{ color: "#808080" }}><h2>    7  </h2></p> </Col>
//                 <p style={{ color: "#808080" }}><h2>          Total        </h2></p> */}

//                 {/* <Button style={{width:150}, align:"right"}}>  <a href='#'> View </a></Button> */}
//               </Row>
//             </Card>
//             </div>
//         </Col>
//       </Row>
//     </Container>






//     {/* third row cards */}

//     {/* Total distance travellers card */}
//     <Row>
//       <Col sm={6} >
//         <div >
//           <Card style={{ height: '18rem' }} size="small" title="Total distance travelles" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto' }}>
//             <p><h3>95</h3></p>

//             {/* color for text */}
//             <p style={{ color: "#808080" }}>Total distance travelles</p>

//             {/* Circular progress bar */}
//             {/* <p style={{ width: 5 }} size="small" >
//               <Progress type="circle" percent={65} width={40} strokeColor='#808080' />
//             </p> */}

//           </Card>
//         </div>
//       </Col>

//       {/* Non communication device card */}

//       <Col sm={6} >
//         <div >
//           <Card style={{ height: '18rem' }} size="small" title="Non communication device" extra={<a href="#"><IoList /> <GrMapLocation /></a>} style={{ width: 'auto' }}>
//             <p><h3>40</h3></p>

//             {/* color for text */}
//             <p style={{ color: "#808080" }}>Non communication device</p>

//             {/* Circular progress bar */}
//             {/* <p style={{ width: 5 }} size="small" >
//               <Progress type="circle" percent={40} width={40} strokeColor='#808080' />
//             </p> */}

//           </Card>
//         </div>
//       </Col>


//     </Row>



//   </>
// );
// export default Cardd;


