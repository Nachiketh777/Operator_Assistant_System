import React, { useEffect, useState } from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Dropdown(props) {
  // const [selected, setSelected] = useState("");
  const select = props.dropDownValue;
  props.setSelected(select)

  
  function handleChange(event){
    props.setSelected(event.target.value);
  }
  // let items = [11,12,13,14,15]
  return (
    <div width="300px">
      <FormControl size="small" fullWidth >
        <InputLabel  id="demo-simple-select-label" onChange={handleChange} value={select}>{select}</InputLabel>
            <Select 
                labelId="demo-simple-select-label"
                label="Select"
                id="demo-simple-select"
            > 
                <MenuItem value={"temp1"}>temp1</MenuItem>
                <MenuItem value={"temp2"}>temp2</MenuItem>
                <MenuItem value={"temp3"}>temp3</MenuItem>
                <MenuItem value={"temp4"}>temp4</MenuItem>
                
            </Select>
       </FormControl>
    </div>
  )
}

export default Dropdown;
