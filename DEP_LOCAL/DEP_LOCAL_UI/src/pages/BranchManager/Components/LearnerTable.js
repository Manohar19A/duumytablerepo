import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

import Grid from "@mui/material/Grid";

import axios from "../../../Uri";

// import tablemodal from "./CreatorModal";

function LearnerData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/BranchAdmin/getAllLearner");

    setData(res.data);

    console.log(res.data);
  };

  const [columns, setColumns] = useState([
    // { title: 'ID', field: 'departmentId', editable: false },

    // {title:"ID",field:"id"},

    { title: "Learner Id", field: "learnerId" },

    { title: "First Name", field: "firstName" },

    { title: "Last Name", field: "lastName" },

    { title: "Email", field: "emailId" },

    { title: "Phone Number", field: "phoneNumber" },

    { title: "Branch Name", field: "branchName" },

    { title: "Assined Courses", field: "assignedCourses" },

    { title: "Address", field: "address" },

    { title: "Start Date", field: "startDate" },

    { title: "End Date", field: "endDate" },

    { title: "User Name", field: "userName" },

    { title: "Password", field: "password" },

    // {

    // title: 'Birth Place',

    // field: 'birthCity',

    // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },

    // },
  ]);

  // const [data, setData] = useState([

  // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },

  // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },

  // ]);

  return (
    <div>
      {/* <tablemodal/> */}

      <Grid>
        <MaterialTable
          title="Learner"
          columns={columns}
          data={data}
          editable={{
            // add data /form

            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log(newData);

                  const res = axios.post("/BranchAdmin/addLearner", newData);

                  setData([...data, newData]);

                  loadData();

                  resolve();
                }, 1000);
              }),

            // Update/PUT data

            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                console.log(oldRow);

                console.log(updatedRow);

                const index = oldRow.creatorId;

                console.log(index);

                const updatedRows = [...data];

                console.log(updatedRows);

                updatedRows[oldRow.tableData.id] = updatedRow;

                console.log(updatedRows);

                setTimeout(() => {
                  console.log(updatedRow);

                  const res = axios

                    .put(`/BranchAdmin/updateLearner/${index}`, updatedRow)

                    .then((resp) => {
                      console.log(resp);

                      loadData();
                    })

                    .catch((err) => {
                      console.log("not updated");

                      // toast.error("Server error");
                    });

                  setData(updatedRows);

                  console.log("updated");

                  // toast.success(" Updated Successfully");

                  console.log(updatedRows);

                  resolve();
                });
              }),

            // Delete Data

            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log(oldData);

                  const dataDelete = [...data];

                  const index = oldData.creatorId;

                  dataDelete.splice(index, 1);

                  const res = axios

                    .delete(`/BranchAdmin/deleteLearner/${index}`)

                    .then((res) => {
                      console.log(res);

                      loadData();
                    });

                  console.log(dataDelete);

                  //setData(dataDelete);

                  resolve();
                }, 1000);
              }),
          }}
          options={{
            headerStyle: {



                backgroundColor: "#FE924A",



                color: "white",



            },
            
            addRowPosition: "first",

            actionsColumnIndex: -1,

            exportButton: "true",
          }}
        />
      </Grid>
    </div>
  );
}

export default LearnerData;
