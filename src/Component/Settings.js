import React from 'react';
import { Typography, FormControl, InputLabel, Divider, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import TaskTrackerApp from './TaskTrackerApp';
function Settings() {
  let[Theme,setTheme]=useState(
    {
        textcolor:"black",
        bgcolor:"white",
        title:"Light Mode",
        check:"true"
    })
    const handleChange=(event)=>{
      if(event.target.checked){
      setTheme({
          title:"Switch to Light Mode",
          textcolor:"white",
          bgcolor:"black",
          check:"true"
      })
  }
      else{
          setTheme({
              title:"Change to Dark Mode",
              textcolor:"black",
              bgcolor:"white",
              check:"false"
      })
  }
  }

  return (
    <div style={{backgroundColor:Theme.bgcolor,color:Theme.textcolor,height:1800}} >
      <Typography variant="h5" gutterBottom align='center'> 
        Settings
      </Typography>
      <FormControl fullWidth >
        <InputLabel style={{backgroundColor:Theme.bgcolor,color:Theme.textcolor}}>Theme</InputLabel>
      </FormControl>
      <Divider style={{ margin: '16px 0' }} />
      <FormGroup>
        <FormControlLabel
          control={<Switch type="checkbox" onChange={handleChange} />}
          label={Theme.title}
        />
      </FormGroup>
      <TaskTrackerApp/>
      
    </div>
  );
}

export default Settings;