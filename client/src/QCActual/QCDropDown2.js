import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {


  const handleChange = (event) => {
    props.setDropdownQcChange(event.target.value);
  };

  return (
    <Box >
      <FormControl size="small" fullWidth sx={{maxWidth:250}}>
        <Select
          value={props.dropdownQcChange}
          onChange={handleChange}
        >
          <MenuItem value={props.value1}>{props.value1}</MenuItem>
          
          <MenuItem value={props.value2}>{props.value2}</MenuItem>
          <MenuItem value={props.value3}>{props.value3}</MenuItem>
          <MenuItem value={props.value4}>{props.value4}</MenuItem>
          <MenuItem value={props.value5}>{props.value5}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}