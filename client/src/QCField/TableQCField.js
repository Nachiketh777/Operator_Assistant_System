import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddToolBar from "./ButtonQC";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddTool from './dialogBox';
//import UpdateEmployee from "./updateEmployee";
//import axios from "axios";
import {DeviceQC, AddQC} from "../ApiService";
import { DeleteQC } from "../ApiService";
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Dropdown from '../Components/Dropdown';

const QcTable = () => {
    const qc = useParams();
    const qcField = qc.qcfield;
    console.log(qcField)


    const [open, setOpen] = useState(false);
    //const [open1, setOpen1] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const [isAddButton, setIsAddButton] = useState(false);
    const [editData, setEditData] = useState([]);
    //const [editData1, setEditData1] = useState([]);
    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);

    useEffect(() => {
        // DeviceQC(DeviceSuccess, DeviceException);
        DeviceQC({id:qcField},DeviceSuccess, DeviceException);

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
        //     minWidth: 100,
        //     align: 'center',
        //     flex: 1,
        //     headerAlign: 'center'
        // },
        {
            field: 'displaylabel',
            headerName: 'DisplayLabel',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'uom',
            headerName: 'UOM',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'expectedvalue',
            headerName: 'Expected Value',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'mintolerance',
            headerName: 'Min Tolerance',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'maxtolerance',
            headerName: 'Max Tolerance',
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
                    if(window.confirm('Do you want to delete?')===true){
                        setDeleteId(props.selectedRow.id);
                        DeleteQC({id:props.selectedRow.id}, handleDeleteSuccess, handleDeleteException);
                    }
                }}
                />
            );
        }
        
        
        // async function DeleteData(props) {
        //     const delId = props.selectedRow.id;
        //     function funcNme(){
        //         //fun body
        //     }
        //     const deleteConfirm = await funcNme()
        //     return (
        //         // <DeleteIcon onClick={() => {
        //         //     if(deleteConfirm){
        //         //         setDeleteId(delId);
        //         //         DeleteQC({id:props.selectedRow.id}, handleDeleteSuccess, handleDeleteException);
        //         //     }
        //         // }}
        //         // />
        //         <DeleteIcon onClick={() => {
        //             setDeleteId(props.selectedRow.id);
        //             DeleteQC({id:props.selectedRow.id}, handleDeleteSuccess, handleDeleteException);
        //         }}
        //         />
        //         );
        //     }
            
            const handleDeleteSuccess = (dataObject) => {
                console.log(dataObject);
                setRefreshData(oldValue => !oldValue);
            }
            const handleDeleteException =(errorObject, errorMass) => {
                console.log(errorMass);
            }
            // console.log(qcfield)
            
            return (
                <div style={{ height: 600, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:"1px" }}>
                <div>
                <h2 style={{color:"#1976D2", fontFamily:"serif", marginTop:0}}>
                    QC Fields(qcreading)</h2>
                </div>
                    
                    {/* <div style={{display:"inline-flex",paddingRight:150}}>
                    </div> */}
            <div style={{display:"flex", justifyContent:"end", marginBottom:20}}>
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
            </div>
            <Paper elevation={3} style={{ width: '85%', height: '500px' }} >
                {console.log('rows', rows)}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>
            {/* <AddToolBar
                setOpen={setOpen}
                open={open}
                editData={editData}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}


            /> */}
            
            <AddTool
                setOpen={setOpen}
                open={open}
                editData={editData}
                addRow={qcField}
                setRefreshData={setRefreshData}
                isAddButton={isAddButton}
            />

        </div>
    )
}

export default QcTable;