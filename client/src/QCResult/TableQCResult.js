import React, { useEffect, useState } from 'react';
import QCResultDropdown from "./QCResultDropdown";
import { Button, Grid, Paper, TextField } from '@mui/material';
import DialogQcBox from "./DialogBoxQCResult";
import { DeviceShowData1 } from '../ApiService';
import { DataGrid } from '@mui/x-data-grid';
import { green } from '@mui/material/colors';


function TableQCResult(props) {

const [rows, setRows] = useState([]);
const [sortedRows, setSortedRows] = useState([]);
const [selectedQcValue, setSelectedQcValue] = useState("All");
const [refreshData, setRefreshData] = useState(false);
const [isLoading, setGridLoading] = useState(true);


useEffect(() => {
  DeviceShowData1(DeviceSuccess, DeviceException);
  
}, [refreshData]);


//Dropdown Search or Filter
useEffect(()=>{

  const sortedData = [];

  if(selectedQcValue === 'All'){
    setSortedRows(rows);
    console.log("rows", rows)
  }
  else{
    rows.map((data)=>{
      if (data.QCstatus === selectedQcValue){
        sortedData.push(data)
      }
    })
    setSortedRows(sortedData);
  }
},[selectedQcValue])

const DeviceSuccess = (dataObject) => {
  setRows(dataObject);
  setGridLoading(false);
  setSortedRows(dataObject)  
}

const DeviceException = (errorObject, message) => { }


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
  // {
  //     field: 'saleOrdNo',
  //     headerName: 'SalesOrdNo',
  //     minWidth: 100,
  //     align: 'center',
  //     flex: 1,
  //     headerAlign: 'center'
  // },
  {
      field: 'itemNo',
      headerName: 'ItemNo',
      minWidth: 100,
      align: 'center',
      flex: 1,
      headerAlign: 'center'
  },
//   {
//     field: 'drawNo',
//     headerName: 'DrawingNo',
//     minWidth: 100,
//     align: 'center',
//     flex: 1,
//     headerAlign: 'center'
// },
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
          { params.row.template === "" ? <p style={{color:"red"}}>Template <br/> not assigned</p> : <p>{params.row.template}</p>
          }
          </>
        )
      }
      
  },
  {
    field: 'QCstatus',
    headerName: 'QC Status',
    minWidth: 100,
    align: 'center',
    flex: 1,
    headerAlign: 'center',
    // cellClassName: 'actions',
    // getActions: (params) => [
    //   <p style={{color:"green"}}>Success</p>
    //     //  (
    //     // (params.row.template !== "" ?
    //     // <Button variant='contained'style={{padding:10}}  onClick={(event)=>{handleQCUpdate(event,params.row)}  }>
    //     // Upload QC Values
    //     // </Button> :
    //     // <Button variant='contained'style={{padding:10}} disabled >
    //     // Upload QC Values
    //     // </Button>)
    // ]        
},
{
  field: 'rejectedComment',
  headerName: 'Reject Comment',
  minWidth: 390,
  align: 'center',
  flex: 1,
  headerAlign: 'center',
  
}
];

// Ell sathiday


  return (

    <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0}}>
       <h2 style={{color:"#1976D2", fontFamily:"serif",marginTop:0}}>QC Result</h2>
       <Grid container>
      <div style={{display:"inline-flex"}}>
        <div style={{width:200}}>
          <QCResultDropdown value3="Approved" value2="Rejected" value1="All" selectedQcValue={selectedQcValue} setSelectedQcValue={setSelectedQcValue}/>
        </div>
        {/* <div style={{display:"inline",justifyContent:"flex-end", width:200, marginLeft:500}}>
          <QCResultDropdown value1="Show Entries"/> 
        </div> */}
        {/* <div>
          <TextField type="search" size='small' placeholder="Search" variant='outlined' />
        </div> */}
      </div>

      </Grid>
      {/* //DialogBox code for alert message
      <div>
        <DialogQcBox />
      </div> */}
      <div style={{ marginTop:30}}>
      <Paper elevation={3} style={{ width: '100%', height: '400px' }} >
                <DataGrid
                    rows={sortedRows}
                    columns={columns}
                    pageSize={5}
                    loading={isLoading}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    // style={{
                    //   wordWrap:"normal",
                    //   textOverflow:"ellipsis"
                
                    // }}
                    style={{
                        whiteSpace:'nowrap'
                    }}
                />
      </Paper>
      </div>
      
    </div>    
  )
}

export default TableQCResult;
