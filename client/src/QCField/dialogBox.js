// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import {Box, DialogActions, DialogContent, Grid, TextField } from '@mui/material';


// const emails = ['username@gmail.com', 'user02@gmail.com'];

// function SimpleDialog(props) {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };


//   return (
//     // <Dialog onClose={handleClose} open={open}>
//     //   <DialogTitle>QC Field</DialogTitle>
//     //   <div style={{padding:10}}>
//     //   <label style={{display:"flex"}}>Display Label</label>
//     //   <input type="text" />
//     //   </div>
//     //   <div style={{padding:10}}>
//     //   <label style={{display:"flex", marginLeft:200, marginTop:-60}}>Uom</label>
//     //   <input style={{display:"flex", marginLeft:200}} type="text" />
//     //   </div>
//     //   <div style={{paddingLeft:10}}> 
//     //   <label style={{display:"flex"}}>Expected Label</label>
//     //   <input type="text" />
//     //   </div>
//     //   <div style={{padding:10}}>
//     //   <label style={{display:"flex", marginLeft:200, marginTop:-50}}>Minimum Tolarence</label>
//     //   <input style={{display:"flex", marginLeft:200}} type="text" />
//     //   </div>
//     //   <div style={{padding:10}}>
//     //   <label style={{display:"flex"}}>Max Tolarence</label>
//     //   <input type="text" />
//     //   </div>
//     //   <div style={{padding:10}}>
//     //   <Button style={{paddingLeft:10,paddingRight:10}} variant="contained">Save</Button>
//     //   </div>
//     //   <div style={{padding:10, marginLeft:80, marginTop:-55}}>
//     //   <Button style={{paddingLeft:10,paddingRight:10}} variant="contained">Cancel</Button>
//     //   </div>

//     // </Dialog>
//     <Dialog
//     sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
//     maxWidth="lg"
//     open={open}
//     >
//     <form >
//         <DialogTitle sx={{ background: "#1976D2", color: "#e3f2fd" }}>
//             QC Field
//         </DialogTitle>
//         <DialogContent>
//             <Grid container spacing={2} style={{ marginTop: '20px' }} >
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//                     <TextField
//                         fullWidth
//                         required
//                         id="outlined-basic"
//                         label="Display Label"
//                         variant="outlined"
//                     />  
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//                     <TextField fullWidth required id="outlined-basic" label="Uom" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//                     <TextField fullWidth required id="outlined-basic" label="Expected Value" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//                     <TextField fullWidth required id="outlined-basic" label="Minimum Tolerance" variant="outlined" />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
//                     <TextField fullWidth required id="outlined-basic" label="Max Tolerance" variant="outlined" />
//                 </Grid>
//             </Grid>

//         </DialogContent>
//         <DialogActions>
//             <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Grid item>
//                     <Button sx={{
//                         background: "#1976D2", '&:hover': {
//                             backgroundColor: '#393d61',
//                         }
//                     }} variant="contained">Save</Button>
//                 </Grid>
//                 <Grid item>
//                     <Button sx={{
//                         background: "#1976D2", '&:hover': {
//                             backgroundColor: '#393d61',
//                         }
//                     }} variant="contained">Cancel</Button>
//                 </Grid>

//             </Grid>
//         </DialogActions>
//     </form>

// </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <Box sx={{marginLeft:120}}>
//       <Button variant="contained" onClick={handleClickOpen}>
//         Add New QC Field
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </Box>
//   );
// }


//--Working Code .......................
import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { AddQC,EditQC } from '../ApiService';

const AddQuality = ({ open, setOpen, editData, addRow, setRefreshData, isAddButton }) => {
    //  const [deviceName, setDeviceName] = useState('');
    //const [id, setId] = useState('');
    const [displaylabel, setdisplaylabel] = useState('');
    const [uom, setuom] = useState('');
    const [expectedvalue, setexpectedvalue] = useState('');
    const [mintolerance, setmintolerance] = useState('');
    const [maxtolerance, setmaxtolerance] = useState('');

    // const [empUid, setEmpUid] = useState('');

    const onCancel = () => {
        setOpen(false);


    }

    const ClearData = () => {

        setdisplaylabel('');
        setuom('');
        setexpectedvalue('');
        setmintolerance('');
        setmaxtolerance('');
     
    }




    //Edit button textbox displaying code
    useEffect(() => {
        console.log("AddButton", isAddButton);
        setdisplaylabel(editData?.displaylabel || '');
        setuom(editData?.uom || '');
        setexpectedvalue(editData?.expectedvalue || '');
        setmintolerance(editData?.mintolerance || '');
        setmaxtolerance(editData?.maxtolerance || '');
        // setEmpUid(editData?.empUid || '');



    }, [editData])

    const AddnData = (e) => {
        if (isAddButton === true) {
            AddQC({
                id: addRow,
                displaylabel : displaylabel ,
                uom : uom,
                expectedvalue : expectedvalue,
                mintolerance : mintolerance,
                maxtolerance : maxtolerance,
                // empUid: empUid,


                // deviceTag: deviceTag,
                // deviceLocation: deviceLocation

            }, handleSucess, handleException)
        } else {
            EditQC({
                id: editData?.id,
                displaylabel : displaylabel,
                uom : uom,
                expectedvalue : expectedvalue,
                mintolerance : mintolerance,
                maxtolerance : maxtolerance,
                // empUid: empUid,
            }, handleSucess, handleException)

        }

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
                                label="Display Label"
                                placeholder='Display Label'
                                variant="outlined"
                                value={displaylabel} onChange={(e) => setdisplaylabel(e.target.value)}



                            /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" label="Uom" placeholder='Uom' variant="outlined"
                                value={uom} onChange={(e) => setuom(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" type="number" label="Expected Value" placeholder='Expected Value' variant="outlined"
                                value={expectedvalue} onChange={(e) => setexpectedvalue(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" type="number" label="Minimum Tolerance" placeholder='Minimum Tolerance' variant="outlined"
                                value={mintolerance} onChange={(e) => setmintolerance(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField fullWidth required id="outlined-basic2" type="number" label="Maximum Tolerance" placeholder='Maximum Tolerance' variant="outlined"
                                value={maxtolerance} onChange={(e) => setmaxtolerance(e.target.value)} ></TextField>
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
