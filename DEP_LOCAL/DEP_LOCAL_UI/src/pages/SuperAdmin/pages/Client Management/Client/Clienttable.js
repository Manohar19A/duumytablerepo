import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../../../Uri";
import Clientmodal from "./ClientModal";
import { Button, Stack } from "react-bootstrap";
import ClientFormUpdate from "./ClientFormUpdate";
import Modal from "react-bootstrap/Modal";
import ClientFormView from "./ClientFormView";
import { ClientFormDelete } from "./ClientFormDelete";

function ClientAdmintable() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [showd, setShowd] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloses = () => setShows(false);
  const handleClosed = () => setShowd(false);

  const [updateClient, setUpdateclient] = useState({});
  const [viewClient, setViewclient] = useState({});
  const [deleteClient, setDeleteClient] = useState({});

  const [data, setData] = useState([]);
  const [addstatus, setStatusadd] = useState(false);
  const [readstatus, setStatusread] = useState(false);
  const [updatestatus, setStatusupdate] = useState(false);
  const [deletestatus, setStatusdelete] = useState(false);

  const pull_data = () => {
    setStatusadd(!addstatus);
  };
  const pull_datau = () => {
   
    setStatusupdate(!updatestatus);
  };
  const pull_datav = () => {
    setStatusread(!readstatus);
  };
  const pull_datad = () => {
    setStatusdelete(!deletestatus);
  };
  const loadData = async () => {
    const response = await axios.get("/client/getAllData");
    setData(response.data.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, [addstatus]);
  useEffect(() => {
    loadData();
  }, [readstatus]);
  useEffect(() => {
    loadData();
  }, [updatestatus]);
  useEffect(() => {
    loadData();
  }, [deletestatus]);

  const [columns, setColumns] = useState([
    // {
    //   title: "Client Id",
    //   field: "clientId",
    //   editable: false,
    // },
    {
      title: "First Name",
      field: "firstName",
      type: "text",
    },

    {
      title: "Last Name",
      field: "lastName",
      type: "text",
    },

    {
      title: "Email",
      field: "email",
    },

    {
      title: "phone number",
      field: "phoneNo",
      type: "number",
    },
    {
      title: "Subscription Start Date",
      field: "subscriptionStartDate",
      type: "date",
    },

    {
      title: "Subscription End Date",
      field: "subscriptionEndDate",
      type: "date",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <ClientFormUpdate
            updateClient={updateClient}
            func={pull_datau}
            handleClose={handleClose}
          />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal show={shows} onHide={handleCloses} centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <ClientFormView
            viewClient={viewClient}
            func={pull_datav}
            handleCloses={handleCloses}
          />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal show={showd} onHide={handleClosed} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ClientFormDelete
            deleteClient={deleteClient}
            func={pull_datad}
            handleClosed={handleClosed}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        <h3 align="center" style={{ color: "orange" }}>
          Client Admin Management
        </h3>
        <Clientmodal func={pull_data} />
        &nbsp;&nbsp;&nbsp; &nbsp;
        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Client Admin Table "
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              headerStyle: {
                backgroundColor: "#A020F0",
                color: "white",
                fontSize: "20px",
              },
              addRowPosition: "first",
              actionsColumnIndex: -1,
              grouping: true,
              exportButton: true,
            }}
            actions={[
              {
                icon: "button",
                tooltip: "Save User",
                onClick: (event, rowData) =>
                  alert("You saved " + rowData.firstName),
              },
            ]}
            components={{
              Action: (props) => (
                <div>
                  <Stack direction="horizontal" gap={3}>
                    <Button
                      variant="info"
                      onClick={(event) => {
                        setShow(true);
                        console.log(props);
                        setUpdateclient(props.data);
                      }}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="secondary"
                      onClick={(event) => {
                        setShowd(true);
                        console.log(props);
                        setDeleteClient(props.data);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      onClick={(event) => {
                        setShows(true);
                        console.log(props);
                        setViewclient(props.data);
                      }}
                    >
                      View
                    </Button>
                  </Stack>
                </div>
              ),
            }}
            // onRowClick={(event, rowData) => {
            //   setShows(true);
            //   console.log(rowData);
            //  setViewclient(rowData);
            // }}
          />
        </Grid>
      </Card>
    </div>
  );
}
export default ClientAdmintable;
