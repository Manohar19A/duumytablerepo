import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../../../Uri";
export default function Editable() {
    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {
        const res = await axios.get("/branch/getAllBranches");
        setData(res.data);
        // console.log(res.data);
        console.log(data)
    };
    const [columns, setColumns] = useState([
        // { title: 'ID', field: 'departmentId', editable: false },
        // {title:"ID",field:"id"},
        { title: 'Branch Name', field: 'branchName' },
        { title: 'Branch ID', field: 'branchId' },

        //   {
        //     title: 'Birth Place',
        //     field: 'birthCity',
        //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        //   },
    ]);

    // const [data, setData] = useState([
    //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    // ]);

    return (
        <Grid>
            <MaterialTable
                title=""
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                           
                          
                            setTimeout(() => {
                                console.log(newData)
                                const res = axios.post("/branch/saveBranch",
                                    newData,
                                );
                                setData([...data, newData]);
                               loadData();
                               

                                resolve();
                            }, 1000)
                        }),
                    // onRowUpdate: (updatedRow, oldRow) =>
                    //     new Promise((resolve, reject) => {
                    //         console.log(oldRow);
                    //         console.log(updatedRow);
                    //         const index = oldRow.departmentId;
                    //         console.log(index);
                    //         const updatedRows = [...data];
                    //         console.log(updatedRows);
                    //         updatedRows[oldRow.tableData.id] = updatedRow;
                    //         console.log(updatedRows);

                    //         setTimeout(() => {
                    //             console.log(updatedRow)
                    //             const res = axios.put(`/dept/update/${index}`, updatedRow)
                    //                 .then((resp) => {
                    //                     console.log(resp);
                    //                     loadData()
                    //                 })

                    //                 .catch((err) => {
                    //                     console.log("not updated")
                    //                     // toast.error("Server error");
                    //                 });

                    //             setData(updatedRows);
                    //             console.log("updated")
                    //             // toast.success(" Updated Successfully");
                    //             console.log(updatedRows);
                    //             resolve();
                    //         });
                    //     }),



                    // onRowDelete: oldData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             console.log(oldData)
                    //             const dataDelete = [...data];
                    //             const index = oldData.departmentId;
                    //             dataDelete.splice(index, 1);
                    //             const res = axios.delete(`/dept/deleteDepartment/${index}`)
                    //                 .then((res) => {
                    //                     console.log(res)
                    //                     loadData()
                    //                 })
                    //             console.log(dataDelete)
                    //             //setData(dataDelete);

                    //             resolve()
                    //         }, 1000)
                    //     }),
                }}
                options={{
                    paging: false,
                    addRowPosition:'first',
                    actionsColumnIndex: -1,
                   
                }}
            />
        </Grid>
    )
}