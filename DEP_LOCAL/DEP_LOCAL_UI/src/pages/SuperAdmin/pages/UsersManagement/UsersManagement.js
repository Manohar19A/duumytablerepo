import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../../Uri";
import Card from "react-bootstrap/Card";

function UsersManagement() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/login/getUsers");
    setData(res.data);
  };

  const [columns, setColumns] = useState([
    { title: "Login Id", field: "loginId" },
    { title: "User Name", field: "loginUserName" },
    { title: "User Type", field: "userType" },
    { title: "Login Access", field: "loginAcess" },
  ]);

  return (
    <div>
      <Card style={{ paddingTop: "20px", paddingRight: "10px" }}>
        <h4 align="center" style={{ color: "orange" }}>
          {" "}
          Users Management{" "}
        </h4>
        &nbsp;
        <Grid>
          <MaterialTable
            title="Users"
            columns={columns}
            data={data}
            editable={{
              // add data /form
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    console.log(newData);
                    const res = axios.post("/login/addUsers", newData);
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
                  console.log("hello");
                  const access = oldRow.loginAcess;
                  console.log(access);
                  const updatedRows = [...data];
                  console.log(updatedRows);
                  updatedRows[oldRow.tableData.id] = updatedRow;
                  console.log(updatedRows);

                  setTimeout(() => {
                    console.log(updatedRow);
                    const res = axios
                      .put(`/login/deactivateUser/${access}`, updatedRow)
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
                      .delete(`/superAdmin/deleteContentCreator/${index}`)
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
              addRowPosition: "first",
              actionsColumnIndex: -1,
              exportButton: "true",
            }}
          />
        </Grid>
      </Card>
    </div>
  );
}

export default UsersManagement;
