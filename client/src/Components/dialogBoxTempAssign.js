//--Working Code .......................
import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { AddTempAssign } from '../ApiService';

const AddQuality = ({ open, setOpen, editData, addRow, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');
    const [produPlanNo, setproduPlanNo] = useState('');
    const [custPoNo, setcustPoNo] = useState('');
    const [saleOrdNo, setsaleOrdNo] = useState('');
    const [itemNo, setitemNo] = useState('');
    const [drawNo, setdrawNo] = useState('');

    // const [empUid, setEmpUid] = useState('');

    const onCancel = () => {
        setOpen(false);


    }

    const ClearData = () => {

        setproduPlanNo('');
        setcustPoNo('');
        setsaleOrdNo('');
        setitemNo('');
        setdrawNo('');
     
    }




    // //Edit button textbox displaying code
    // useEffect(() => {
    //     setproduPlanNo(editData?.produPlanNo || '');
    //     setcustPoNo(editData?.custPoNo || '');
    //     setsaleOrdNo(editData?.saleOrdNo || '');
    //     setitemNo(editData?.itemNo || '');
    //     setdrawNo(editData?.drawNo || '');
    //     // setEmpUid(editData?.empUid || '');



    // }, [editData])

    const AddnData = (e) => {
            AddTempAssign({
                produPlanNo  : produPlanNo,
                custPoNo: custPoNo,
                saleOrdNo : saleOrdNo,
                itemNo : itemNo,
                drawNo : drawNo,
                // empUid: empUid,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, handleSucess, handleException)

    }
    const handleSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log("refresh",dataObject)

    }
    const handleException = (errorObject, errorMass) => {

    }

    
    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
            maxWidth="lg"
            open={open}
        >
            <form onSubmit={AddnData}>
                <DialogTitle sx={{ background: "#1976D2", color: "#fafcfc" }}>
                    {isAddButton ? 'ADD' : 'Edit'} QCField
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-basic1"
                                label="ProdPlan No"
                                placeholder='ProdPlan No'
                                variant="outlined"
                                value={produPlanNo} onChange={(e) => setproduPlanNo(e.target.value)}



                            /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="CustPoNo" placeholder='CustPoNo' variant="outlined"
                                value={custPoNo} onChange={(e) => setcustPoNo(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="SalesOrdNo" placeholder='SalesOrdNo' variant="outlined"
                                value={saleOrdNo} onChange={(e) => setsaleOrdNo(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="ItemNo" placeholder='ItemNo' variant="outlined"
                                value={itemNo} onChange={(e) => setitemNo(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="Drawing No" placeholder='Drawing No' variant="outlined"
                                value={drawNo} onChange={(e) => setdrawNo(e.target.value)} ></TextField>
                        </Grid>
                        
                        {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic3" label="Name " placeholder='Name' variant="outlined"
                                value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic4" label="Password " placeholder='Password' variant="outlined"
                                value={employeePassword} onChange={(e) => setEmployeePassword(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic5" label="Age " placeholder='Age' variant="outlined"
                                value={employeeAge} onChange={(e) => setEmployeeAge(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic6" label="Contact " placeholder='Contact' variant="outlined"
                                value={employeeContact} onChange={(e) => setEmployeeContact(e.target.value)} />
                        </Grid> */}
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} type="submit" variant="contained">
                                {isAddButton ? 'Add' : 'Update'}

                            </Button>
                        </Grid>
                        <Grid item>
                            <Button sx={{
                                background: "#1976D2", '&:hover': {
                                    backgroundColor: '#393d61',
                                }
                            }} onClick={onCancel} variant="contained">Cancel</Button>
                        </Grid>

                    </Grid>
                </DialogActions>
            </form>

        </Dialog>
    )
}

export default AddQuality;
