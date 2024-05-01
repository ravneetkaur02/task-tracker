import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, description: taskDescription });
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            style={{backgroundColor:'#ffcdd2'
            ,color:'white'}}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Task Description"
            value={taskDescription} 
            onChange={(e) => setTaskDescription(e.target.value)}
            style={{backgroundColor:'#ffcdd2',color:'white'}}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;