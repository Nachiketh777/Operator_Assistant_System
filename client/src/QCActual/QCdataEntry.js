import React, { useEffect, useState } from 'react';
import QCAddButton from "./QCAddButton";
import QCDropdown2 from "./QCDropDown2";
import { Button, Grid, Link, Paper, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeviceShowData1 } from '../ApiService';
import { useNavigate } from 'react-router-dom';

const QCdataEntry = () => {
  
const Navigate = useNavigate();
const [isLoading, setGridLoading] = useState(true);
const [rows, setRows] = useState([]);
const [filteredRows, setFilteredRows] = useState([]);
const [dropdownQcChange, setDropdownQcChange] = useState("All");
const [refreshData, setRefreshData] = useState(false);

useEffect(() => {
  DeviceShowData1(DeviceSuccess, DeviceException);
  
}, [refreshData]);


//Dropdown search/filter
useEffect(()=>{
  console.log(dropdownQcChange)
  // console.log(filteredRows)
  const filterdData = []

  if (dropdownQcChange === "All"){
    setFilteredRows(rows)
  }
  else{
    rows.map((data)=>{
      if (data.custPoNo === dropdownQcChange){
        filterdData.push(data)
      }
    })
    console.log('Fle', filterdData)
    setFilteredRows(filterdData)
  }

}, [dropdownQcChange])

const DeviceSuccess = (dataObject) => {
  // console.log(dataObject)
  // dataObject.forEach(data => {
      //     data.Dropdown = <Dropdown />
  // });
  // console.log("e",dataObject)
  setRows(dataObject);
  setGridLoading(false);
  setFilteredRows(dataObject)  
}

const DeviceException = (errorObject, message) => { }

const handleQCUpdate = (event, data) => {
    console.log("navigation",data)
    Navigate(""+data.id, {state:data})
}



  const columns = [
    {
        field: 'id',
        headerName: 'SlNo',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center'
    },
    {
        field: 'produPlanNo',
        headerName: 'ProduPlanNo',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center'
    },
    {
        field: 'custPoNo',
        headerName: 'CustPoNo',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center'
    },
    {
        field: 'saleOrdNo',
        headerName: 'SalesOrdNo',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center'
    },
    {
        field: 'itemNo',
        headerName: 'ItemNo',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center'
    },
    {
      field: 'drawNo',
      headerName: 'DrawingNo',
      minWidth: 100,
      align: 'center',
      flex: 1,
      headerAlign: 'center'
  },
  {
        field: 'template',
        headerName: 'Template',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center',
        renderCell: (params)=>{
          return(
            <>
            { 
            params.row.template === "" ? <p style={{color:"red"}}>Template <br/> not assigned</p> : <p>{params.row.template}</p>
            }
            </>
          )
        }
        
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'QCstatus',
      minWidth: 190,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      cellClassName: 'actions',
      getActions: (params) => [
          //  (
          (params.row.template !== "" ?
          <Button variant='contained'style={{padding:10}}  onClick={(event)=>{handleQCUpdate(event,params.row)}  }>
          Upload QC Values
          </Button> :
          <Button variant='contained'style={{padding:10}} disabled >
          Upload QC Values
          </Button>)
      ]        
  },
//   {
//     field: 'actions',
//     type: 'actions',
//     headerName: 'Actions',
//     minWidth: 100,
//     align: 'center',
//     flex: 1,
//     cellClassName: 'actions',
//     getActions: (params) => [
//         // <EditData selectedRow={params.row} />,
//         // <DeleteData selectedRow={params.row} />,
//         <Link style={{textDecoration:"none", color:"black"}} to={""+params.row.id}>View QCField</Link>
//     ],
// },
];


  return (
    <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0}} >
    <h2 style={{color:"#1976D2", fontFamily:"serif", marginTop:0, marginBottom:50}}>QC Data Entry(QCdataEntry)</h2>
    {/* <div style={{display:"inline-flex", justifyContent:'space-around'}}> */}
        {/* <div style={{width:200}}> */}
          {/* <QCDropdown2 value1="All" value2="JOHNSON" value3="STARK" value4="Pending for QC Reading" value5="Approved" dropdownQcChange={dropdownQcChange} setDropdownQcChange={setDropdownQcChange}/> */}
          {/* <QCDropdown2 value1="All" value2="Submitted" value3="Rejected" value4="Pending for QC Reading" value5="Approved" dropdownQcChange={dropdownQcChange} setDropdownQcChange={setDropdownQcChange}/> */}
        {/* </div> */}
        {/* <div style={{display:"inline",justifyContent:"flex-end", width:200, marginLeft:500}}>
          <QCDropdown2 value1="Show Entries"/> 
        </div> */}
        {/* <div style={{marginLeft:10}}>
          <TextField type="search" size='small' placeholder="Search" variant='outlined' />
        </div> */}
    {/* </div> */}
        <Grid style={{ height: 400, width: '97%'}}>
          <div > 
            {/* <div style={{width:250, marginTop:5, marginBottom:20, marginLeft:700}}> */}
            {/* <div style={{display:"flex", justifyContent:"end", marginBottom:20}}>
                <div style={{width:200, marginRight:10}}> 
                    <Dropdown />
                    </div>
            <input type="search" width={300}  />
            </div> */}
            {/* <AddEmployeeToolBar
                setIsAddButton={setIsAddButton}
                setEditData={setEditData}
                setOpen={setOpen}
            /> */}

            <Paper elevation={3} style={{ width: '100%', height: '400px', marginTop:0 }} >
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </Paper>
            {/* <AddEmployee
                setOpen={setOpen}
                open={open}
                editData={editData}


            /> */}
            {/* <UpdateEmployee
                setOpen={setOpen1}
                open={open1}
                editData1={editData1}
            /> */}

        </div>
        </Grid>
    </div>
  )
}

export default QCdataEntry;