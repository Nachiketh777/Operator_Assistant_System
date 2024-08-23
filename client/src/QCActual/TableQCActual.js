import React, { useState, useEffect } from 'react';
import { Button, Grid, Switch, TextField } from '@mui/material';
import QCAddButton from './QCAddButton';
// import { useLocation } from 'react-router-dom';
import { UpdateQcActual, DeviceQcReading} from '../ApiService';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { string } from 'i/lib/util';
import { green } from '@mui/material/colors';




function TableQCActual() {
    const qc = useParams();
    const rowId = qc.rowId;
    console.log(rowId)
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [qcReading, setQcReading] = useState([]);
    const [temp1, setTemp1] = useState([]);
    const [temp2, setTemp2] = useState([]);
    const [temp3, setTemp3] = useState([]);
    const [temp4, setTemp4] = useState([]);
    const location = useLocation()
    const data = location.state

    useEffect(()=>{
        console.log("use",data.template)
        DeviceQcReading({"rowId":rowId, "tempName":data.template},(data)=>{
            console.log("dataInFront",data)
            setData1(data[0][0])
            setQcReading(JSON.parse(data[0][0].qc))
            setData2(data[1])
            setTemp1(data[1][0])
            setTemp2(data[1][1])
            setTemp3(data[1][2])
            setTemp4(data[1][3])
        },
        (error)=>{

        })
    },[])
    // console.log("data1",data1)
    // console.log("data2",data2)

    const prodPlanNo =" data.produPlanNo";
    const updaterowId = data.rowId;
    const [assembly, setAssembly] = useState("data.assemblyNo")
    const [serial, setSerial] = useState("data.serialNo")
    // const [bcd, setBcd] = useState("Editable")
    const [bcdref, setBcdref] = useState("data.BCDref")
    const [bcdOrder, setBcdOrder] = useState("data.BCDorderNo")
    const [custph, setCustph] = useState("data.customerPhone")
    const [inspD, setInspD] = useState("data.inspectedDate")
    const [draw, setDraw] = useState("data.drawNo")
    const [item, setItem] = useState("data.itemNo")
    const [orderD, setOrderD] = useState("data.OrderDueDate")
    const [sales, setSales] = useState("data.SalesOrder")
    const [shell, setShell] = useState("data.shellMaterial")
    const [shippedD, setShippedD] = useState("data.shippedDate")
    const [tag, setTag] = useState("data.TagNo")
    const [dieD, setDieD] = useState("data.DieDiameter")
    const [journal, setJournal] = useState("data.JournalDiameterDrive")
    const [face, setFace] = useState("data.FaceSize")
    const [inspC, setInspeC] = useState("data.inspectorComments")

  




    const handleQcReadingChange = (event)=>{
        const valueName = event.target.name
        const value = event.target.value
        console.log("ValueName", valueName)
        console.log("Value", value)
        const newData1 = Object.keys(qcReading).map((data)=>{
            const labelName = Object.keys(qcReading[data])[0]
            console.log(labelName)
            if (labelName === valueName){
                const tempData = {...qcReading[data]}
                tempData[labelName] = value
                console.log("newloop",tempData)
                return tempData
            }
            return qcReading[data]
        })

        console.log(newData1)
        setQcReading(newData1)

    }

    const handleOnChange = (event) => {
        const valueName = event.target.name
        const value = event.target.value
        let tempData;
        
        switch (valueName) {
            case "assemblyNo":
                tempData = {...data1 , "assemblyNo":value}
                setData1(tempData)
                // setAssembly(value);
                console.log("Value: ", valueName, " : ", value)
                break;

            case "serialNo":
                tempData = {...data1 , "serialNo":value}
                setData1(tempData)
                // setSerial(value);
                console.log("Value: ", valueName, " : ", value)
                break;
                    
            case "BCDref":
                tempData = {...data1 , "BCDref":value}
                setData1(tempData)
                // setBcdref(value);
                console.log("Value: ", valueName, " : ", value)
                break;
        
            case "BCDorderNo":
                tempData = {...data1 , "BCDorderNo":value}
                setData1(tempData)
                // setBcdOrder(value);
                break;
        
            case "customerPhone":
                tempData = {...data1 , "customerPhone":value}
                setData1(tempData)
                // setCustph(value);
                break;

            case "inspectedDate":
                tempData = {...data1 , "inspectedDate":value}
                setData1(tempData)
                console.log("InsDate",value)
                // setInspD(value);
                break;
            case "drawNo":
                tempData = {...data1 , "drawNo":value}
                setData1(tempData)
                // setDraw(value);
                break;
            case "itemNo":
                tempData = {...data1 , "itemNo":value}
                setData1(tempData)
                // setItem(value);
                break;
            case "OrderDueDate":
                tempData = {...data1 , "OrderDueDate":value}
                setData1(tempData)
                // setOrderD(value);
                break;
            case "SalesOrder":
                tempData = {...data1 , "SalesOrder":value}
                setData1(tempData)
                // setSales(value);
                break;
            case "ShellMaterial":
                tempData = {...data1 , "ShellMaterial":value}
                setData1(tempData)
                // setShell(value)
                break;    
            case "ShippedDate":
                tempData = {...data1 , "ShippedDate":value}
                setData1(tempData)
                // setShippedD(value);
                break;
            case "TagNo":
                tempData = {...data1 , "TagNo":value}
                setData1(tempData)
                // setTag(value);
                break;

            case "inspectorComments":
                tempData = {...data1 , "inspC":value}
                setData1(tempData)
                // setInspeC(value);
                break;
            default:
                console.log("No Handle Change Case matched.");
                break;
        }
        
    }
// a = [1,2,4]
// console.log(a) Array(3)[1,2,4]
//console.log(...a) 1,2,3

    const getDateObject=(date = new Date())=>{
        const d = date.getFullYear() +"-"+ ((date.getMonth()/10)>=1? date.getMonth():("0"+date.getMonth())) +"-"+ ((date.getDate()/10)>=1?date.getDate():("0"+date.getDate()));
        return d
    }
    
    const handleSubmit = (event) => {
        console.log(event.target)
        console.log("Data1:", data1)
        console.log("Data2:", data2)
        let status = "Approved";
        let rejectFields = [];
        let comments = "";
        console.log("QCREADING: ",qcReading)
        console.log("DATA2:",data2)
        
        const readingData = Object.keys(qcReading).map((data)=>{
        
            const label = Object.keys(qcReading[data])[0]
            const val =qcReading[data][label]
            console.log("D", val, " : ", label)
            console.log("Stst", rejectFields)
            let newEntry = {[label] : val};
            console.log("Min: ", data2)
            data2.map((d)=>{
                if(label === d.displaylabel){
                if (val > d.maxtolerance || val < d.mintolerance){
                    status = "Rejected";
                    console.log("S", status)
                    rejectFields.push(label)
                }
            }
            })

            return newEntry
        })
        console.log("Rejected Fields", rejectFields)
        console.log(...rejectFields)


        comments = rejectFields.join(", ")
        if (rejectFields.length == 0){
            comments = ""
        }
        else if (rejectFields.length > 1){
            
            comments = comments + " values are not in range."
        }else{
            comments = comments + " value is not in range."

        }

        


        console.log("Reading Data", readingData)
        const readingDataJson = {...readingData}

        const stringifyData = JSON.stringify(readingDataJson)
        console.log("Parse", stringifyData)
        const curDateTime = new Date()
        // const curTime = curDateTime.getFullYear()+"-"+curDateTime.getMonth()+"-"+curDateTime.getDay()+" "+curDateTime.getHours()+":"+curDateTime.getMinutes()+":"+curDateTime.getSeconds()
        const curTime = curDateTime.getFullYear() +"-"+ ((curDateTime.getMonth()/10)>=1? curDateTime.getMonth():("0"+curDateTime.getMonth())) +"-"+ ((curDateTime.getDate()/10)>=1?curDateTime.getDate():("0"+curDateTime.getDate()))+" "+curDateTime.getHours()+":"+curDateTime.getMinutes()+":"+curDateTime.getSeconds()
        console.log("currentTime",curTime)
// console.log("Data1: ", data1)
        const data = {   
            assemblyNo:data1.assemblyNo,
            inspectedDate:data1.inspectedDate,
            DieDiameter:data1.DieDiameter,
            serialNo:data1.serialNo,
            BCDref:data1.BCDref,
            BCDorderNo:data1.BCDorderNo,
            customerPhone:data1.customerPhone,
            OrderDueDate:data1.OrderDueDate,
            SalesOrder:data1.SalesOrder,
            ShellMaterial:data1.ShellMaterial,
            ShippedDate:data1.ShippedDate,
            TagNo:data1.TagNo,
            InspectorComments:data1.InspectorComments,
            drawNo:data1.drawNo,
            itemNo:data1.itemNo,
            id:rowId,
            QCreading: stringifyData,
            QCstatus: status,
            readingUploadTime: curTime,
            comments: comments
            }
        
        UpdateQcActual({data}, ()=>{console.info("Table is updated.")}, ()=>{console.info("Table update failed")})

    }

    console.log("Hi",data1)
  return (
    <div>
          <h3 style={{color:"#1976D2", fontFamily:"serif"}}>QC ACTUAL DATA ENTRY</h3>
          <br />
          {/* {data1.map((data)=>{
          })} */}
          
    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <label><strong>Production Plan No:{data1.produPlanNo}</strong></label>
                            </Grid>
                        <Grid item xs={4}>
                            <label htmlFor="assembly-id"><strong>Assembly No:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="serialNo"><strong>Serial No:</strong></label>
                            </Grid>
                        <Grid item xs={4}></Grid>
                            <Grid item xs={4} >
                            <TextField
                                required
                                size="small"
                                id="assembly-id"
                                name='assemblyNo'
                                value={ data1.assemblyNo} 
                                onChange={handleOnChange}
                                // label="Asse Label"
                                // placeholder='Display Label'
                                variant="outlined"
                               >{data1.assemblyNo}</TextField>
                               </Grid>
                        {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <TextField required id="outlined-basic2" label="Uom" placeholder='Uom' variant="outlined"
                               ></TextField>
                        </Grid> */}
                        <Grid item xs={4}>
                            <TextField required size="small" variant="outlined"  name='serialNo' value={data1.serialNo} id="serialNo" onChange={handleOnChange}>
                                {data1.serialNo} 
                                </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <label htmlFor="BCDref"><strong>BCD Ref:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='BCDor'><strong>BCD Order No:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='custph'><strong>Customer Phone:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id="BCDref" variant="outlined" name='BCDref' value={data1.BCDref} onChange={handleOnChange}
                                 >{data1.BCDref}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='BCDor' variant="outlined" name="BCDorderNo" value={data1.BCDorderNo} onChange={handleOnChange}
                                 >{data1.BCDorderNo}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='custph' variant="outlined" name="customerPhone" value={data1.customerPhone} onChange={handleOnChange}
                                 >{data1.customerPhone}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='inspDate'><strong>Inspected Date</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='drawno'><strong>Drawing No:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='itemno'><strong>Item No:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='inspDate' type="date" variant="outlined"
                                 sx={{width:225}} name='inspectedDate' value={getDateObject(new Date(data1.inspectedDate))} onChange={handleOnChange}>{getDateObject(new Date(data1.inspectedDate))}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='drawno' variant="outlined" name='drawNo' value={data1.drawNo} onChange={handleOnChange}
                                 >{data1.drawNo}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='itemno' variant="outlined" name='itemNo' value={data1.itemNo} onChange={handleOnChange}
                                 >{data1.itemNo}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='orderdue'><strong>Order Due Date</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='salesOr'><strong>Sales Order:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='shellM'><strong>Shell Material:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='orderdue' type="date" variant="outlined" name='OrderDueDate' value={getDateObject(new Date(data1.OrderDueDate))}
                                 sx={{width:225}} onChange={handleOnChange}>{getDateObject(new Date(data1.OrderDueDate))}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='salesOr' variant="outlined" name='SalesOrder' value={data1.SalesOrder} onChange={handleOnChange}
                                 >{data1.SalesOrder}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='shellM' variant="outlined" name='ShellMaterial' value={data1.ShellMaterial} onChange={handleOnChange}
                                 >{data1.ShellMaterial}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='shippedDate'><strong>Shipped Date</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                        <label htmlFor='tagNo'><strong>Tag No:</strong></label>
                        </Grid>
                        <Grid item xs={4}>
                            {/* <TextField required size="small" id="outlined-basic2" label="Maximum Tolerance" placeholder='Maximum Tolerance' variant="outlined"
                                 ></TextField> */}
                        </Grid>
                        <Grid item xs={4}>
                            <TextField  sx={{width:225}} required size="small" id='shippedDate' variant="outlined" name='ShippedDate' type='date' value={getDateObject(new Date(data1.ShippedDate))} onChange={handleOnChange}
                                 >{getDateObject(new Date(data1.ShippedDate))}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField required size="small" id='tagNo' variant="outlined" name='TagNo' value={data1.TagNo} onChange={handleOnChange}
                                 >{data1.TagNo}</TextField>
                        </Grid>
                        <Grid item xs={4}>
                           
                        </Grid>
                           <h3><u>Please enter QC Reading:</u></h3>
                        <Grid item xs={12}>
                        </Grid>
                        {/* Dynamic Updating */}
                        {/* {console.log("qc data", JSON.parse(data1.qc))} */}
                        {/* {qcReadings = JSON.parse(data1[qc]) } */}
                        {console.log("QcReading", qcReading)}
                        {console.log("SData2", data2)}
                        {Object.keys(qcReading).map((data)=>{
                            const displaylabel = Object.keys(qcReading[data])[0]
                            const qcvalue =qcReading[data][displaylabel]
                        return <>
                            <Grid item xs={2} spacing={2}>
                            <label><strong>{displaylabel}</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                                {console.log("Rendering", qcvalue, " : ", displaylabel)}
                            <TextField required size="small" id="outlined-basic2" variant="outlined" name={displaylabel} value={qcvalue} onChange={handleQcReadingChange}
                                    >{qcvalue}</TextField>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </>
                            
                        })}
                        
                        <Grid item xs={12} spacing={2}>
                           <label><strong>Inspector Comments:</strong></label>
                        </Grid>
                        <Grid item xs={4.5} spacing={2}>
                        <TextField required fullWidth size="small" id="outlined-basic2" variant="outlined" name='inspectorComments' value={data1.InspectorComments} onChange={handleOnChange}
                                 >{data1.InspectorComments}</TextField>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid> 
                        <Grid item xs={2.5}>
                        </Grid> 
                        <Grid item xs={2}>
                          <Button fullWidth variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
                        </Grid>
        </Grid>


    </div>
  )
}

export default TableQCActual;

