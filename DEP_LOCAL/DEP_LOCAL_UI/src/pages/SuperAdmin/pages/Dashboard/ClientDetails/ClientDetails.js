import React from 'react'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import axios from "../../../../../Uri";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Card from 'react-bootstrap/Card'



const ClientDetails = () => {



    const [fieldsData, setFieldsData] = useState([])



    useEffect(() => {
        axios.get("/client/getAllData")
            .then((response) => {
                setFieldsData(response.data)



            })
            .catch((err) => { toast.error("data is not getting") })
    }, [])
console.log(typeof(fieldsData.subscriptionEndDate))

    const renderedtable = (data, index) => {
    
        
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{data.clientId}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                {/* <td>{data.email}</td>
<td>{data.phoneNo}</td> */}
                {/* {/* <td>{data.userName}</td>
<td>{data.password}</td>
<td>{data.country}</td> */}
                {/* <td>{data.address}</td> */} 
                <td>{data.subscriptionStartDate}</td>
                <td>{data.subscriptionEndDate } </td>
            </tr>
        )
    }
 
    return (
        <div>
            <Card>
            <Card style={{  color: 'black', paddingLeft: '1px', fontSize: '20px' }} >
                    <Card.Header align='center' style={{backgroundColor:"white" , color:"blueviolet"}}>
                        Client Subscription Details</Card.Header>

                </Card>
                <Card.Body>
                    <Card.Text>


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Serial No.</th>
                                    <th>Client Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    {/* <th>Email</th>
                                    <th>PhoneNo</th> */}
                                    {/* <th>Username</th>
                                     <th>Password</th>
                                     <th>Country</th> */}
                                    {/* <th>Address</th> */}
                                    <th>subscriptionStartDate</th>
                                    <th>subscriptionEndDate</th>
                                </tr>
                            </thead>
                            <tbody>
                               {/* // {fieldsData.map(renderedtable)} */}
                                

                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}



export default ClientDetails;