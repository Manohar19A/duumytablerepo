import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import { FcApproval, FcConferenceCall, FcClock } from 'react-icons/fc';
// import ClientAdmintable from '../Client Management/Client/Clienttable';
import {useState,useEffect} from 'react'
import axios from '../../../../Uri'
const Cards = () => {


    const [tableData, setTableData] = useState([""])

    useEffect(() => {
        axios.get("/client/getClientsCount")
            .then((response) => {
                setTableData(response.data)
            })
            .catch((err) => { 
                // toast.error("data is not getting")
             err.error})
    }, [])
console.log(tableData)


    return (
        <div>
             
            <Container style={{ paddingTop: "20px" }}>
                <Row>
                    <Col xl={4}>

                        {/* total courses card */}
                        <Card className='box' style={{
                            margin: 'auto',
                            color: 'grey', borderRadius: '10px',
                            height: '10rem', fontSize: '20px',
                            boxShadow: " 0px 1px 5px 2px"
                        }} >
                            <Card.Header align='center' style={{ backgroundColor: 'white', borderRadius: '10px', color: "blue" }}>
                                Total Courses &nbsp; <FcApproval style={{ fontSize: '25px' }} /></Card.Header>
                            <Card.Body>
                                <br />

                                <Card.Text align='center' style={{ color: "#4B0082", fontSize: '30px' }}>
                                    54
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* pending courses for approval card */}
                    <Col xl={4}>
                        <Card className='box' style={{  color: 'grey', borderRadius: '10px', height: '10rem', fontSize: '20px', boxShadow: "0px 1px 5px 2px" }} >
                           
                            <Card.Header align='center' style={{ backgroundColor: 'white', borderRadius: '10px', color: "green" }}>
                                Pending courses for approval &nbsp; <FcClock style={{ fontSize: '25px' }} />
                            </Card.Header>

                            <Card.Body>
                                <br/>

                                <Card.Text align='center' style={{ color: "red", fontSize: '30px' }}>
                                    23
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/* total client count */}
                    <Col xl={4}>
                        <Card className='box' style={{
                             color: 'grey',
                            borderRadius: '10px', height: '10rem', fontSize: '20px', boxShadow: "0px 1px 5px 2px"
                        }} >

                            <Card.Header align='center' style={{
                                backgroundColor: 'white',
                                borderRadius: '10px', color: "#FF0099"
                            }}>

                                Client Count  &nbsp;  <FcConferenceCall style={{ fontSize: '25px' }} />
                            </Card.Header>
                            <Card.Body>
                                <br />

                                {/* <Card.Text align='center' font='red' style={{ color: "DodgerBlue", fontSize: '30px' }} >
                              
                                </Card.Text> */}
                         <h2 align='center' style={{color:"green"}} > { tableData.clientsCount} </h2>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* total revenue */}
                    {/* <Col xl={3}>
                        <Card className='box' style={{ width: '15rem', color: 'black', borderRadius: '10px', height: '10rem', fontSize: '20px',boxShadow:"5px 5px 2px" }}  >
                            <Card.Header align='center' style={{backgroundColor:'white',borderRadius: '10px'}}>Total Revenue</Card.Header>
                            <Card.Body>

                                <Card.Text align='center'>
                                    20,000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Cards;

