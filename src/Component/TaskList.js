import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

function TaskList({ tasks, deleteTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <ListItemText primary={task.name} secondary={task.description} />
          <ListItemSecondaryAction>
            <IconButton onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
                 
      
      ))}
    </List>
  );
}

export default TaskList;