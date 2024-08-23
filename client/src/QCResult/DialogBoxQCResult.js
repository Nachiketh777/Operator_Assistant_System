import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen1(false);
    setOpen(false)
  };
  const handleUpdate = () => {
    setOpen(true);
    setOpen1(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        open
      </Button>
      <Dialog fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         <span style={{color:"#1976D2"}}>Alert Message</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to update the changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={handleClose}>No</Button>
          <Button variant='text' onClick={handleUpdate} autoFocus>
            Yes
          </Button>
          <Dialog
        open={open1}
       // onClose={handleClose2#tea}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         <span style={{color:"#1976D2"}}>Alert Message</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Updated SuccessFully
          </DialogContentText>
          <DialogActions>
            <Button variant='text' onClick={handleClose2}>Ok</Button>
          </DialogActions>
        </DialogContent>
        </Dialog>
        </DialogActions>
      </Dialog>
    </div>
  );
}