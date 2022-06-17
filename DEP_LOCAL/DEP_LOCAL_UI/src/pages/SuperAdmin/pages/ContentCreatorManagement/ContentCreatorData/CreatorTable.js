import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../../../Uri";
import Card from 'react-bootstrap/Card';
// import CreatorModal from "./CreatorModal";
// import tablemodal from "./CreatorModal";


 function ContentCreatorData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/superAdmin/getAllContentCreators");
    setData(res.data);
    console.log(res.data);
  };
  const [columns, setColumns] = useState([
    // { title: 'ID', field: 'departmentId', editable: false },
    // {title:"ID",field:"id"},
    { title: "Creator Id", field: "creatorId" , editable:false },
    
    
    // Validating First Name
    { title: "First Name", field: "firstName",
    validate: (rowData) => {
      if (rowData.firstName === undefined || rowData.firstName === "") {
      return "Please enter first name";
      } else if (rowData.firstName.length < 3) {
      return " first name should contain atleast 3 letters";
      }else if (!rowData.firstName.match(/^[aA-zZ\s]+$/)){
      return "Please enter first name"
      }
      return true;
      },
     },

     
      //  Validating Last Name
    { title: "Last Name", field: "lastName",
    validate: (rowData) => {
      if (rowData.lastName === undefined || rowData.lastName === "") {
      return "Please enter Last name";
      } else if (rowData.lastName.length < 3) {
      return "lastName must be at least 3 characters ";
      }
      else if (!rowData.lastName.match(/^[aA-zZ\s]+$/)){
      return "Please enter Last name"
      }
      return true;
      },
   },

    //  Validating Email
    { title: "Email", field: "email", 
    validate: (rowData) => {
      if (rowData.email === undefined || rowData.email === "") {
      return "enter valid mail";
      } else if (!rowData.email.includes("@gmail" && ".com")) {
      return "enter valid email (example:chiru@gmail.com)";
      }
      return true;
      },
 
  },

    // Validating Phone Number
    { title: "Phone Number", field: "phoneNumber",
    // validate: (rowData) => {
    //   if (rowData.phoneNumber === undefined || rowData.phoneNo === "") {
    //   return "number is Required";
    //   } else if (rowData.phoneNo.length < 10 || rowData.phoneNo.length > 10) {
    //   return "Enter only 10 digit number";
    //   }      
    //   return true;
    //   },
  },

    //  Validating date of joining
    { title: "Date of Joining", field: "dateOfJoining",type: "date" ,
    validate: (rowData) => {
      if (
      rowData.dateOfJoining === undefined ||
      rowData.dateOfJoining === ""
      ) {
      return "Required";
      }
      return true;
      },
  },

  // Validating Address
    { title: "Address", field: "address",
    validate: (rowData) =>
    rowData.address === ""
    ? { isValid: false, helperText: "Address cannot be empty" }
    : true,
  },

    //  Validating Country
    { title: "Country", field: "country" ,
    validate: (rowData) => {
      if (rowData.country === undefined || rowData.country === "") {
      return " Required";
      } else if (!rowData.country.match(/^[aA-zZ\s]+$/)) {
      return " Please enter Country name";
      }
      return true;
      },
  },

    // Validating User Name
    { title: "User Name", field: "userName", 
    validate: (rowData) =>
    rowData.userName === ""
    ? { isValid: false, helperText: "User name cannot be empty" }
    : true,
  },

        // Validating Password
    { title: "Password", field: "password" , type:"password", 
    validate: (rowData) => {
      if (rowData.password === undefined) {
      return " Required";
      } else if (
      !rowData.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}$/g
      )
      ) {
      return " Please enter valid password";
      }
      return true;
      },
  
  },
    
  ]);

  return (

   
      <div>
           <Card style={{paddingTop:'20px',paddingRight:'10px', paddingLeft: "10px", paddingBottom: "10px",}} >

            <h4 align='center' style={{color:'orange'}}> Content Creator Management </h4>
               {/* <CreatorModal/> */}
               &nbsp;   



    <Grid>
    
      <MaterialTable 
       title="Content Creator" 
    //    style={{color: 'green'}}
        columns={columns}
        data={data}
        editable={{

            // add data /form
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(newData);
                const res = axios.post("/superAdmin/addContentCreator", newData);
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
                  .put(`/superAdmin/updateContentCreator/${index}`, updatedRow)
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
          headerStyle: {
            backgroundColor: "#FE924A",
            color: "white",
            fontSize: "20px",
          },
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

export default ContentCreatorData;