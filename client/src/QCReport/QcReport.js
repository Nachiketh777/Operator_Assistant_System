import React, { useEffect, useState } from 'react';
import { QCReportApi, GetTemp, GetItem, GetTempMinMax } from '../ApiService';
import { DataGrid, GridToolbarContainer, GridToolbar } from '@mui/x-data-grid';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import QCDropdown from "./QCDropdown";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


//export
// function CustomToolbar() {
//     return (
//       <GridToolbarContainer>
//         <GridToolbarExport />
//       </GridToolbarContainer>
//     );
//   }



function QcReport() {

  const Navigate = useNavigate();
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [isLoading, setGridLoading] = useState(true);
    const [template, setTemplate] = useState('All');
    const [tempList, setTempList] = useState([]);
    const [itemNum, setItemNum] =useState('All');
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
      const tempItem = [template,itemNum];
      console.log("tempNameeeeeeeeee",tempItem)
      QCReportApi(tempItem, DeviceSuccess, DeviceException);
        console.log("Getting template")
        GetTemp(deviceSuccess, deviceException);
        console.log("Got template")
        GetItem(deviceSuccess1,deviceException1);
        
      }, [refreshData]);

      // useEffect(() => {
      //   QCReportApi(itemNum, deviceSuccess1, deviceException1);
      //   console.log("Getting template")
      //   console.log("Got template")
      // }, [refreshData]);
      
      const deviceSuccess= (data) =>{
        console.log("datafor dropdown", data)
        setTempList(data)
    }
    const deviceException= () =>{
        console.log("Error in temp")
    }
    const deviceSuccess1= (data2) =>{
      console.log("data to itemNO dropdown", data2)
      setItemList(data2)
  }
  const deviceException1= () =>{
    console.log("Error in itemNo")
}


      //Call Function in render cell
    const getDateObject=(date = new Date())=>{
      const d = date.getFullYear() +"-"+ ((date.getMonth()/10)>=1? date.getMonth():("0"+date.getMonth())) +"-"+ ((date.getDate()/10)>=1?date.getDate():("0"+date.getDate()));
      return d
    }

    

    const DeviceSuccess = (dataObject) => {
      console.log("dataObjectsssssss", dataObject)
    if (Object.keys(dataObject).length === 0){
      setRows([])
      setGridLoading(false); 
    }else{
      setRows(dataObject);
      setGridLoading(false); 
    }

    }
    const DeviceException = (errorObject, message) => { }

    
    const handleQCUpdate = (event, data) => {

      GetTempMinMax(data.template,(d)=>{
        console.log("navigation", data)
        Navigate(""+data.id, {state:{data: data, template: d}})
      },()=>{console.log("New exception")});
      // Navigate("qcview")
  }
  

    function BasicSelect(props) {


      const handleChange = (event) => {
        setTemplate(event.target.value)
        setRefreshData(prevValue => !prevValue)
      };
    
      return (
        <Box sx={{ minWidth: 120, width:200, marginRight:2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Template</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={template}
              label="Template"
              onChange={handleChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
            {
                console.log("type",tempList)}
            {
                tempList.map((data)=>
    
                    <MenuItem value={data.tempName}>{data.tempName}</MenuItem>
                )
            }
            </Select>
          </FormControl>
        </Box>
      );
    }
    function BasicSelect2(props) {


      const handleChange2 = (event) => {
        setItemNum(event.target.value)
        setRefreshData(prevValue => !prevValue)
      };
    
      return (
        <Box sx={{ minWidth: 120, width:200, marginRight:2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">ItemNo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={itemNum}
              label="itemNo"
              onChange={handleChange2}
            >
            <MenuItem value={"All"}>All</MenuItem>
            {
                console.log("itemList  data",itemList)}
            {
                itemList.map((data2)=>
    
                    <MenuItem value={data2.itemNo}>{data2.itemNo}</MenuItem>
                )
            }
            </Select>
          </FormControl>
        </Box>
      );
    }
    const columns = [
        {
            field: 'produPlanNo',
            headerName: 'ProduPlanNo',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
            field: 'template',
            headerName: 'Template Name',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        // {
        //     field: 'custPoNo',
        //     headerName: 'CustPoNo',
        //     minWidth: 100,
        //     align: 'center',
        //     flex: 1,
        //     headerAlign: 'center'
        // },
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
            headerName: 'itemNo',
            minWidth: 100,
            align: 'center',
            flex: 1,
            headerAlign: 'center'
        },
        {
        field: 'OrderDueDate',
        headerName: 'OrderDueDate',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center',
        renderCell: (params)=>{
          return (
            <>
            {
              getDateObject(new Date(params.row.OrderDueDate))
              
            }
           </>
          )
        }
        //Call the getDateObject to get the date and load it in a label
      },  
      {
        // field: 'qc',
        headerName: 'QCValues',
        minWidth: 100,
        align: 'center',
        flex: 1,
        headerAlign: 'center',
        renderCell: (params)=>{
          return(
          <Button variant='contained' onClick={(event)=>{handleQCUpdate(event, params.row)}}>View Report</Button>
          )
        }
    },   
    ];
    console.log("dateObject", getDateObject(new Date()))
    
    return (
        <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0 }}>
            <h2 style={{color:"#1976D2", fontFamily:"serif", marginTop:0}}>QC Report(QcReport)</h2>
            
            {/* <p style={{display:'inline-flex', marginRight:'10px'}}>From:</p><TextField type='date' />
            <p style={{display:'inline-flex', marginLeft:'100px', marginRight:'10px'}}>To:</p><TextField type='date' /><Button sx={{marginLeft:"120px"}} variant='contained'>Submit</Button> */}
              <div style={{display:'inline-flex', marginRight:'10px', marginLeft:'auto'}}>
              <BasicSelect template={template} setTemplate={setTemplate} tempList={tempList}/>
              <BasicSelect2 itemNum={itemNum} setItemNum={setItemNum} itemList={itemList}/>
              </div>
                <div style={{ marginTop:30}}>
                    <Paper elevation={3} style={{ width: '100%', height: '400px' }} >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        loading={isLoading}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick

                        //export
                        slots={{
                            toolbar: GridToolbar,
                          }}
                    />
                    </Paper>
                </div>
        </div>
  )
}


export default QcReport;
