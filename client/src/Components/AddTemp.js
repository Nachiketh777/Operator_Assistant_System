

// Working Code--

import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddToolBar from "./AddToolBar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddEmployee from './dialogBoxAdd';
//import UpdateEmployee from "./updateEmployee";
//import axios from "axios";
import { Link } from 'react-router-dom';
import { DeviceShowData } from "../ApiService";
import { TempDeletetData } from "../ApiService";
import { TextField } from '@mui/material';
// import Dropdown from './Dropdown';

const AddDeviceResult = () => {

    const [open, setOpen] = useState(false);
    //const [open1, setOpen1] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const [isAddButton, setIsAddButton] = useState(true);
    const [editData, setEditData] = useState([]);
    //const [editData1, setEditData1] = useState([]);
    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);

    useEffect(() => {
        DeviceShowData(DeviceSuccess, DeviceException);

    }, [refreshData]);

    const DeviceSuccess = (dataObject) => {
        setRows(dataObject);
        setGridLoading(false);

    }
    const DeviceException = (errorObject, message) => { }



    const columns = [
        // {
        //     field: 'id',
        //     headerName: 'SLNO',
        //     minWidth: 170,
        //     align: 'center',
        //     flex: 1,
        //     headerAlign: 'center'
        // },
        {
            field: 'tempName',
            headerName: 'TemplateName',
            minWidth: 170,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'description',
            headerName: 'Description',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            minWidth: 100,
            align: 'center',
            flex: 1,
            cellClassName: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row} />,
                <DeleteData selectedRow={params.row} />,
                <Link style={{textDecoration:"none", color:"black"}} to={""+params.row.id}>View QCField</Link>
            ],
        },
    ];

    function EditData(props) {
        return (
            <EditIcon onClick={(event) => {

                setIsAddButton(false);
                setEditData(props.selectedRow);
                //EmpUpdateData(props.selectedRow.id)
                setOpen(true);



            }}
            />
        );
    }

    function DeleteData(props) {
        return (
            <DeleteIcon onClick={() => {
                setDeleteId(props.selectedRow.id);
                TempDeletetData({id:props.selectedRow.id}, handleDeleteSuccess, handleDeleteException);
            }}
            />
        );
    }

    const handleDeleteSuccess = (dataObject) => {
        console.log(dataObject);
        setRefreshData(oldValue => !oldValue);
    }
    const handleDeleteException =(errorObject, errorMass) => {
        console.log(errorMass);
    }
    
    return (
        <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0 }}>
    
                    <h2 style={{color:"#1976D2", fontFamily:"serif", marginTop:0}}>Add Template</h2>
                
                    
                    {/* <div style={{display:"inline-flex",paddingRight:150}}>
                    </div> */}
            {/* <div style={{display:"flex", justifyContent:"end", marginBottom:20}}> */}
            {/* <div style={{width:250, marginTop:5, marginBottom:20, marginLeft:700}}> */}
                        {/* <div style={{width:200, marginRight:10}}> 
                            <Dropdown />
                        </div> */}
                        {/* <input type="search" width={300}  /> */}
            <div style={{display:"flex",paddingLeft:100, justifyContent:"end", marginTop:40}}>
                <AddToolBar
                    setIsAddButton={setIsAddButton}
                    setEditData={setEditData}
                    setOpen={setOpen}
                />
            </div> 
            {/* </div> */}
            <Paper elevation={3} style={{ width: '100%', height: '400px' }} >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>
            <AddEmployee
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}
            />
            {/* <UpdateEmployee
                setOpen={setOpen1}
                open={open1}
                editData1={editData1}

            /> */}

        </div>


    )
}

export default AddDeviceResult;