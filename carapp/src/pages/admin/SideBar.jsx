import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NavBar from '../navbar/Navbar';
import React, { useState, useCallback } from 'react';
import AddSP from './AddSP';
import AddUser from './AddUser';
import ViewUsers from './ViewUsers';
import Dashboard from './Dashboard';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleIconClick = useCallback((index) => {
    if (index === 0) {
        console.log("hellow world");
      setActiveComponent(<Dashboard/>);
    } else if (index === 1) {
      setActiveComponent(<AddSP />);
    }else if(index === 2){
      setActiveComponent(<AddSP/>)

    }else if(index === 3){
      setActiveComponent(<ViewUsers/>)

    } else if(index ===4){
      setActiveComponent(<AddUser/>)

    }
  }, []);

  return (
    <>      
      <NavBar onIconClick={handleIconClick} />
      <div>
          {activeComponent}

      </div>
    </>
  );
}

export default AdminDashboard;
