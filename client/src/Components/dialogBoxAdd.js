import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { AddTemp } from "../ApiService";
import { TempEditData } from "../ApiService";
import { TempDeleteData } from '../ApiService';

const AddTemplate = ({ open, setOpen, editData, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');
    const [tempName, setTempName] = useState('');
    const [description, setDescription] = useState('');
    // const [employeeEmail, setEmployeeEmail] = useState('');
    // const [employeeContact, setEmployeeContact] = useState('');
    // const [employeePassword, setEmployeePassword] = useState('');

    // const [empUid, setEmpUid] = useState('');

    const onCancel = () => {
        setOpen(false);


    }

    const ClearData = () => {

        setTempName('');
        setDescription('');
        // setEmployeeAge('');
        // setEmployeeEmail('');
        // setEmployeeContact('');
        // setEmployeePassword('');
        // setEmpUid('');
    }




    //Edit button textbox displaying code
    useEffect(() => {
        console.log(isAddButton);
        setTempName(editData?.tempName || '');
        setDescription(editData?.description || '');
        // setEmployeeEmail(editData?.employeeEmail || '');
        // setEmployeeContact(editData?.employeeContact || '');
        // setEmployeePassword(editData?.employeePassword || '');
        // setEmpUid(editData?.empUid || '');



    }, [editData])

    const AddnData = (e) => {
        if (isAddButton === true) {
            AddTemp({
                tempName : tempName ,
                description : description,
                // employeeEmail: employeeEmail,
                // employeeContact: employeeContact,
                // employeePassword: employeePassword,
                // empUid: empUid,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, handleSucess, handleException)
        } else {
            TempEditData({
                id: editData?.id,
                tempName : tempName,
                description : description,
                // employeeEmail: employeeEmail,
                // employeeContact: employeeContact,
                // employeePassword: employeePassword,
                // empUid: empUid,
            }, handleSucess, handleException)

        }

    }
    const handleSucess = (dataObject) => {
        setOpen(false);
        setRefreshData(oldValue => !oldValue);
        ClearData();
        console.log(dataObject)

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
                    {isAddButton ? 'ADD' : 'Edit'} Template
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} style={{ marginTop: '20px' }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidthh
                                required
                                id="outlined-basic1"
                                label="Template Name"
                                placeholder='Template Name'
                                variant="outlined"
                                value={tempName} onChange={(e) => setTempName(e.target.value)}
                                /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="Description" placeholder='Description' variant="outlined"
                                value={description} onChange={(e) => setDescription(e.target.value)} ></TextField>
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

export default AddTemplate;
