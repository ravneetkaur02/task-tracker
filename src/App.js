import React, { useState } from 'react';
import TaskTrackerApp from './Component/TaskTrackerApp';
import Settings from './Component/Settings';
import { AppBar, Tabs, Tab, Typography, Drawer,Grid,IconButton, Toolbar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  
  const [currentListItemText, setcurrentListItemText] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleTabChange = (event, newValue) => {
    setcurrentListItemText(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer} flex>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Task Tracker
          </Typography>
          <Drawer open={drawerOpen} onClose={toggleDrawer}>
          <Tabs value={currentListItemText} onChange={handleTabChange} centered>
          <Tab label="Tasks" />
          <Tab label=<SettingsIcon/> />
        </Tabs>
        </Drawer>
        </Toolbar>
      </AppBar>
      <Grid>
            {currentListItemText === 0 && <TaskTrackerApp />}
            {currentListItemText === 1 && <Settings />}
          </Grid>
      
    </div>
  );
}

export default App;