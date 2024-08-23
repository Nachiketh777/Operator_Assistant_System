import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {Box, DialogActions, DialogContent, Grid, TextField } from '@mui/material';


const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  return (
    // <Dialog onClose={handleClose} open={open}>
    //   <DialogTitle>QC Field</DialogTitle>
    //   <div style={{padding:10}}>
    //   <label style={{display:"flex"}}>Display Label</label>
    //   <input type="text" />
    //   </div>
    //   <div style={{padding:10}}>
    //   <label style={{display:"flex", marginLeft:200, marginTop:-60}}>Uom</label>
    //   <input style={{display:"flex", marginLeft:200}} type="text" />
    //   </div>
    //   <div style={{paddingLeft:10}}> 
    //   <label style={{display:"flex"}}>Expected Label</label>
    //   <input type="text" />
    //   </div>
    //   <div style={{padding:10}}>
    //   <label style={{display:"flex", marginLeft:200, marginTop:-50}}>Minimum Tolarence</label>
    //   <input style={{display:"flex", marginLeft:200}} type="text" />
    //   </div>
    //   <div style={{padding:10}}>
    //   <label style={{display:"flex"}}>Max Tolarence</label>
    //   <input type="text" />
    //   </div>
    //   <div style={{padding:10}}>
    //   <Button style={{paddingLeft:10,paddingRight:10}} variant="contained">Save</Button>
    //   </div>
    //   <div style={{padding:10, marginLeft:80, marginTop:-55}}>
    //   <Button style={{paddingLeft:10,paddingRight:10}} variant="contained">Cancel</Button>
    //   </div>

    // </Dialog>
    <Dialog
    sx={{ '& .MuiDialog-paper': { width: '62%', maxHeight: '100%' } }}
    maxWidth="lg"
    open={open}
>
    <form >
        <DialogTitle sx={{ background: "#1976D2", color: "#e3f2fd" }}>
            QC Field
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2} style={{ marginTop: '20px' }} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-basic"
                        label="Template Name"
                        variant="outlined"
                    />  
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField fullWidth required id="outlined-basic" label="Description" variant="outlined" />
                </Grid>
                {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField fullWidth required id="outlined-basic" label="Expected Value" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField fullWidth required id="outlined-basic" label="Minimum Tolerance" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField fullWidth required id="outlined-basic" label="Max Tolerance" variant="outlined" />
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
                    }} variant="contained">Add</Button>
                </Grid>
                <Grid item>
                    <Button sx={{
                        background: "#1976D2", '&:hover': {
                            backgroundColor: '#393d61',
                        }
                    }} variant="contained">Cancel</Button>
                </Grid>

            </Grid>
        </DialogActions>
    </form>

</Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{marginLeft:120}}>
      <Button variant="contained" onClick={handleClickOpen}>
        Add New Template
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
