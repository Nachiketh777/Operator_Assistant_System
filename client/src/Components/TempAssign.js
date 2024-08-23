
//TABLE CODE

//TableCom2

import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import AddEmployeeToolBar from "./addEmployeeToolbar";
import { DataGrid } from '@mui/x-data-grid';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import AddEmployee from './addEmployee';
// import UpdateEmployee from "./updateEmployee";
//import axios from "axios";
import { DeviceShowData1, UpdateTemplate, DropdownData } from "../ApiService";
// import Dropdown from './Dropdown';

// import React, { useEffect, useState } from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ButtonTemp from "./ButtonTempAssign";
import DialogTemp from "./dialogBoxTempAssign";
import { SliderMarkLabel } from '@mui/material';

const AddDeviceResult = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const [isAddButton, setIsAddButton] = useState(true);
    const [editData, setEditData] = useState([]);
    const [editData1, setEditData1] = useState([]);
    const [isLoading, setGridLoading] = useState(true);
    const [rows, setRows] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [updateData, setUpdateData] = useState("")
    const [dData, setDdata] = useState([]);
    
    useEffect(() => {
        DeviceShowData1(DeviceSuccess, DeviceException);
        DropdownData((data)=>{
            console.log("dropdown", data)
            setDdata(data)
        },
        (error)=>{

        })
        
    }, [refreshData]);

    const DeviceSuccess = (dataObject) => {
        // console.log(dataObject)
        // dataObject.forEach(data => {
            //     data.Dropdown = <Dropdown />
        // });
        // console.log("e",dataObject)
        setRows(dataObject);
        setGridLoading(false);
        
    }
    const DeviceException = (errorObject, message) => { }
    
    
    
    
    
    
    function Dropdown(props) {
        const [selected, setSelected] = useState({id:"",forid:"",value:""});
        const select = props.dropDownValue;
        // console.log(select)
        console.log("Propsssssssssssss", props)
        console.log("dropdown value", select)

        // const d = [{"tempName": "Hi"}, {"tempName": "Nice"}]
        
        console.log("Selectecd: ",selected)
        
        const handleUpadte = event => {
            
            const rowId = event.target.value
            console.log("Selected row", rowId)
            console.log("DropdownValuesforid", selected)
            if(rowId == selected.id){
                UpdateTemplate({id: selected.id, forid:selected.forid, templateValue: selected.value},()=>{
                    console.log("Update success");
                    setRefreshData(oldValue => !oldValue)
                }, ()=>{
                    console.log("update fail");
                })
            }else{
                console.log("Diffent row",typeof(rowId))
                console.log("select row",typeof(selected.id))
            }
            
        }
        if (selected.id==""){
            setSelected({id:select.row.id, value:select.row.template})
        }
        
        function handleChange(event){
            const uData = event.target.value
            dData.map((data)=>{
                if (data.tempName === uData){
                    console.log("datas",data)
                    setSelected({id:select.row.id,forid:data.id,value:uData});
                }
            })
            // const select = props.dropDownValue;
        }

        return (
            
          <div width="300px">
            <FormControl size="small" fullWidth>
              <InputLabel  id="demo-simple-select-label">Select</InputLabel>
                  <Select 
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selected.value}
                      label="Select"
                      onChange={handleChange} 
                    >
                        <MenuItem value={""}>None</MenuItem>

                    {dData.map((data)=>
                      <MenuItem value={data.tempName}>{data.tempName}</MenuItem>
                    )}
                      {/* <MenuItem value={"Anvil ReWork"}>Anvil ReWork</MenuItem>
                      <MenuItem value={"Die Clone"}>{d[0].tempName}</MenuItem>
                      <MenuItem value={"ANC"}>ANC</MenuItem> */}
                  </Select>
             </FormControl>
             {
            props.dropDownValue.value === "" ?
             <Button variant='contained' value = {select.row.id} style={{marginLeft:10,width:"80px"}} onClick={handleUpadte} >Save</Button>:
             <Button variant='contained' style={{marginLeft:10,width:"80px"}} disabled>Save</Button>
             }
          </div>
        )
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
            minWidth: 250,
            align: 'center',
            flex: 1,
            headerAlign: 'center',
            renderCell: (params) => {

            return <div style={{display:"flex"}}><div style={{width:"150px",paddingRight:"10px", marginLeft:-60}}><Dropdown dropDownValue = {params} /></div>
            <div style={{paddingLeft:"10px"}}></div> </div>
            }
        //     cellClassName: 'actions',
        //      getActions: (params) => [
        //     //     <EditData selectedRow={params.row} />,
        //     //     <DeleteData selectedRow={params.row} />,
        //     <Dropdown />,
                
        // ],
        },
    ];

    function EditData(props) {
        return (
            <EditIcon onClick={(event) => {

                setIsAddButton(false);
                setEditData(props.selectedRow);
                setOpen1(true);


            }}
            />
        );
    }

    function DeleteData(props) {
        return (
            <DeleteIcon onClick={() => {
                setDeleteId(props.selectedRow.id);
            }}
            />
        );
    }

    return (
        <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0 }}>
        {/* <div style={{ height: 400, width: '97%', marginLeft: '20px'}}> */}
            <h2 style={{color:"#1976D2", fontFamily:"serif", marginTop:0}}>
                {/* Production plan no and  */}
                Template Assignment(TempAssign)</h2>
           
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
             <div style={{display:"flex",paddingLeft:100, justifyContent:"end", marginTop:40}}>
            <ButtonTemp 
                // setIsAddButton={setIsAddButton}
                // setEditData={setEditData}
                setOpen={setOpen}
            />
            </div>
            
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
                {/* <DialogTemp
                    setOpen={setOpen}
                    open={open}
                    editData={editData}
                    setRefreshData={setRefreshData}
                    isAddButton={isAddButton}
                 /> */}
                <DialogTemp
                    setOpen={setOpen}
                    open={open}
                    setRefreshData={setRefreshData}
                 />
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


    )
}

export default AddDeviceResult;
