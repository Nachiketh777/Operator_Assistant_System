import { Button, Grid, TextField, backdropClasses } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { GridCsvExportOptions, GridToolbarContainer, GridToolbarExport , GridToolbar, DataGrid} from '@mui/x-data-grid';


function QCView() {
    const pdfRef = useRef();
    const downloadPDF = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('report.pdf')
    
      })
    }
    const param = useParams();
    const rowId = param.rowId;
    console.log("RowId", rowId)

    const location = useLocation()
    const dataObject = location.state
    const data = dataObject.data
    const template = dataObject.template

    console.log("TemplatesMinMax", template)
    const jsonQcData = JSON.parse(data.qc)
    console.log("json qc", jsonQcData) 

  return (
    <>
      <h2 style={{display:'flex'}}>QC Report of {data.custPoNo}</h2>
      <div style={{paddingLeft:10}} ref={pdfRef}>
      <Grid container spacing={2} style={{marginRight:'auto', marginLeft:'auto'}}>
                        <Grid item xs={2}>
                            <label><strong>Production Plan No:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label>{data.produPlanNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label><strong>Assembly:</strong></label>
                            </Grid>
                        <Grid item xs={4}>
                            <label htmlFor="assemblyNo">{data.assemblyNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="serialNo"><strong>Serial No:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="serialNo">{data.serialNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="custPoNo"><strong>CustPo No:</strong></label>
                            </Grid>
                            <Grid item xs={3}>
                            <label htmlFor="custPoNo">{data.custPoNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="SalesOrder"><strong>SalesOrdNo:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="SalesOrder">{data.SalesOrder}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="itemNo"><strong>ItemNo:</strong></label>
                            </Grid>
                            <Grid item xs={3}>
                            <label htmlFor="itemNo">{data.itemNo}</label>
                            </Grid>
                             <Grid item xs={2}>
                            <label htmlFor="drawNo"><strong>DrawNo:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="drawNo">{data.drawNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="template"><strong>Template:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="template">{data.template}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="inspectedDate"><strong>InspectedDate:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="inspectedDate">{data.inspectedDate}</label>
                            </Grid>
                            <Grid item xs={2}>
                            <label htmlFor="QcStatus"><strong>QcStatus:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="QcStatus">{data.QCstatus}</label>
                            </Grid>
                            {/* <Grid item xs={2}>
                              <label htmlFor="DieDiameter"><strong>DieDiameter:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="DieDiameter">{data.DieDiameter}</label>
                            </Grid> */}
                            <Grid item xs={2}>
                              <label htmlFor="serialNo"><strong>SerialNo:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="serialNo">{data.serialNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="BCDref"><strong>BCDref:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="BCDref">{data.BCDref}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="bcdOrderno"><strong>BCDorderno:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="bcdOrderno">{data.BCDorderNo}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="customerPhone"><strong>CustPhone:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="customerPhone">{data.customerPhone}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="OrderDueDate"><strong>OrderDueDate:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="OrderDueDate">{data.OrderDueDate}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="SalesOrder"><strong>SalesOrder:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="SalesOrder">{data.SalesOrder}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="ShellMaterial"><strong>ShellMaterial:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="ShellMaterial">{data.ShellMaterial}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="ShippedDate"><strong>ShippedDate:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="ShippedDate">{data.ShippedDate}</label>
                            </Grid>
                            <Grid item xs={2}>
                              <label htmlFor="TagNo"><strong>Tag No:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                              <label htmlFor="TagNo">{data.TagNo}</label>
                            </Grid>
                            {/* <Grid item xs={2}>
                            <label htmlFor="serialNo"><strong>inspectedDate:</strong></label>
                            </Grid>
                            <Grid item xs={8}>
                            <label htmlFor="serialNo"><strong>{data.inspectedDate}</strong></label>
                            </Grid> */}
                            {/* <Grid item xs={2}>
                            <label htmlFor="serialNo"><strong>QcValues:</strong></label>
                            </Grid>
                            <Grid item xs={4}>
                            <label htmlFor="serialNo"><strong>{data.qc}</strong></label>
                            </Grid> */}
                             <Grid item xs={12}>
                           <h3><u>Qc Reading Values:</u></h3>
                            </Grid>
                            {  Object.keys(jsonQcData).map((data, index)=>{
                                // jsonQcData.map((data)=>{
                                    // console.log("DataData", data)
                                    let tempMinMax = {min:"", max:""}
                                    const keyName = Object.keys(jsonQcData[data])[0]
                                    template.map((d)=>{
                                      console.log("Data of template", d)
                                      if (d.displaylabel === keyName){
                                        tempMinMax.min = d.mintolerance
                                        tempMinMax.max = d.maxtolerance
                                      }
                                    })
                                  console.log("return Val", index) 
                                  {if(index%2 == 0){
                                    return <>
                                  <Grid item xs={3} >
                                    <label htmlFor="qcreading"><strong>{keyName}:</strong></label>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <label htmlFor="qcreading">{ jsonQcData[data][keyName]}</label>
                                  </Grid> 
                                  <Grid item xs={2}>
                                    <label htmlFor="qcreading"><strong>Minimum Value:</strong></label>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <label htmlFor="qcreading">{tempMinMax.min }</label>
                                  </Grid> 
                                  <Grid item xs={2} >
                                    <label htmlFor="qcreading"><strong>Maximum Value:</strong></label>
                                  </Grid>
                                  <Grid item xs={1}>
                                    <label htmlFor="qcreading">{ tempMinMax.max}</label>
                                  </Grid> 
                              </>}else{
                                return <>
                                <Grid item xs={3} style={{backgroundColor:"gray"}} >
                                  <label htmlFor="qcreading"><strong>{keyName}:</strong></label>
                                </Grid>
                                <Grid item xs={1} style={{backgroundColor:"gray"}}>
                                  <label htmlFor="qcreading">{ jsonQcData[data][keyName]}</label>
                                </Grid> 
                                <Grid item xs={2} style={{backgroundColor:"gray"}}>
                                  <label htmlFor="qcreading"><strong>Minimum Value:</strong></label>
                                </Grid>
                                <Grid item xs={1} style={{backgroundColor:"gray"}}>
                                  <label htmlFor="qcreading">{tempMinMax.min }</label>
                                </Grid> 
                                <Grid item xs={2} style={{backgroundColor:"gray"}}>
                                  <label htmlFor="qcreading"><strong>Maximum Value:</strong></label>
                                </Grid>
                                <Grid item xs={1} style={{backgroundColor:"gray"}}>
                                  <label htmlFor="qcreading">{ tempMinMax.max}</label>
                                </Grid> 
                            </>
                                  }
                                }
                              })
                            }
                       
                      
        </Grid>
        {/* slots={{
                            toolbar: GridToolbar,
                          }} */}
    </div>
    <div style={{display:'flex', justifyContent:'flex-end'}}>
     <Button variant='contained' onClick={downloadPDF}>Download PDF</Button>
        </div>
    </>
  )
}

export default QCView;
