import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
//   const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.setSelectedQcValue(event.target.value);
  };

  return (
    <Box style={{minWidth: 120, width:200, marginRight:2}} >
      <FormControl size="small" fullWidth sx={{maxWidth:250}}>
        <InputLabel id="demo-simple-select-label">QcStatus</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedQcValue}
          label="QcStatus"
          onChange={handleChange}
        >
          <MenuItem value={props.value1}>{props.value1}</MenuItem>
          <MenuItem value={props.value2}>{props.value2}</MenuItem>
          <MenuItem value={props.value3}>{props.value3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}