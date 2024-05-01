import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Grid,  Container} from '@mui/material';
function TaskTrackerApp() {
  const [tasks, setTasks] = useState([]);
 
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
 
 

  return (
    <div>
      
      <Container>
        <Grid container spacing={3} paddingTop={10}>
          <Grid item xs={12} md={9}>
            {/* Main content area for task list */}
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TaskTrackerApp;