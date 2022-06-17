import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";

import axios from "../../../../../Uri";

function BranchManagerTable() {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Name",
      field: "name",
      editable: "onAdd",
      validate: (rowData) => {
        if (rowData.name === undefined || rowData.name === "") {
          return " Required";
        } else if (rowData.name.length < 6 || rowData.name.length > 6) {
          return " Please enter valid id";
        }
        return true;
      },
    },

    {
      title: "Branch Name",
      field: "branchName",
      validate: (rowData) => {
        if (rowData.branchName === undefined) {
          return " Required";
        } else if (!rowData.branchName.match(/[^0-9]/g)) {
          return " Please enter valid name";
        }
        return true;
      },
    },

    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (rowData.email === undefined || rowData.email === "") {
          return "enter valid mail";
        } else if (!rowData.email.includes("@gmail" && ".com")) {
          return "enter valid email (example:chiru@gmail.com)";
        }

        return true;
      },
    },

    {
      title: "Login Username",
      field: "loginUserName",
      validate: (rowData) => {
        if (rowData.loginUserName === undefined) {
          return " Required";
        }
        return true;
      },
    },
    {
      title: "Password",
      field: "password",
      editable: "onAdd",
      validate: (rowData) => {
        if (rowData.password === undefined) {
          return "  Required";
        } else if (
          !rowData.password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,32}$/g
          )
        ) {
          return " Please enter valid password";
        }
        return true;
      },
    },

    {
      title: "Country",
      field: "country",
      validate: (rowData) => {
        if (rowData.country === undefined) {
          return " Required";
        }
        return true;
      },
    },
    {
      title: "State",
      field: "state",
      validate: (rowData) => {
        if (rowData.state === undefined) {
          return " Required";
        } else if (!rowData.state.match(/[^0-9]/g)) {
          return " Please enter valid name";
        }
        return true;
      },
    },
  ];

  useEffect(() => {
    axios
      .get("/branchAdmin/getAllBranchAdmins")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Grid container>
        <Grid xs={12}>
          <MaterialTable
            title="Branch Management"
            data={data}
            sx={{ color: "white" }}
            columns={columns}
            editable={{
              // onRowAdd: newData =>

              //     new Promise((resolve, reject) => {
              //         setTimeout(() => {
              //             console.log(newData)
              //             const res = axios.post("/designation/postDesignationMaster", newData)
              //             console.log(res)
              //             setData([...data, newData]);
              //             loadData();

              //             resolve();
              //         }, 1000)
              //     }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((resolve, reject) => {
                  console.log(oldRow);
                  console.log(updatedRow);
                  const index = oldRow.branchId;
                  console.log(index);
                  const updatedRows = [...data];
                  console.log(updatedRows);
                  updatedRows[oldRow.tableData.id] = updatedRow;
                  console.log(updatedRows);

                  setTimeout(() => {
                    console.log(index);
                    console.log(updatedRow);

                    const res = axios
                      .put(
                        `/branchAdmin/updateBranchAdminWithId/${index}`,
                        updatedRow
                      )

                      .then((resp) => {
                        console.log(resp);
                        loadData();
                        setData(updatedRows);
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
            }}
            options={{
              exportButton: true,
              pageSize: 20,
              actionsColumnIndex: -1,
              grouping: true,
              addRowPosition: "first",

              rowStyle: {
                fontSize: 16,
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default BranchManagerTable;
