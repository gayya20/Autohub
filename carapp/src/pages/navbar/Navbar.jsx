import React, { useState, useEffect } from 'react';
import { useAuthContext } from '@asgardeo/auth-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import PreviewIcon from '@mui/icons-material/Preview';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const NavBar = ({ onIconClick }) => {
  const { state, signOut, getBasicUserInfo } = useAuthContext();
  const [userRole, setUserRole] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(0);

  useEffect(() => {
    if (state.isAuthenticated) {
      getBasicUserInfo()
        .then((userInfo) => {
          setUserRole(userInfo.applicationRoles);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [state.isAuthenticated, getBasicUserInfo]);

  useEffect(() => {
    onIconClick(selectedIcon);
  }, [selectedIcon, onIconClick]);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
    onIconClick(index);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            // Implement menu open logic here
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          auto hub
        </Typography>
        <div style={{backgroundColor:"",marginRight:"",color:"white"}}>
          {userRole === 'Admin' && (
            <>
              <IconButton onClick={() => handleIconClick(0)} color={selectedIcon === 0 ? 'primary' : 'inherit'}>
                <AddCircleIcon />
                <h1 style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>Dashboard</h1>
              </IconButton>

              <IconButton onClick={() => handleIconClick(1)} color={selectedIcon === 1 ? 'primary' : 'inherit'}>
                <ManageAccountsIcon />
                <h1 style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>Add SP</h1>

              </IconButton>
              <IconButton onClick={() => handleIconClick(2)} color={selectedIcon === 2 ? 'primary' : 'inherit'}>
                <CarRepairIcon />
                <h1 style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>Add Services</h1>

              </IconButton>

              <IconButton onClick={() => handleIconClick(3)} color={selectedIcon === 3 ? 'primary' : 'inherit'}>
                <PreviewIcon />
                <h1 style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>View Users</h1>

              </IconButton>

              <IconButton onClick={() => handleIconClick(4)} color={selectedIcon === 4 ? 'primary' : 'inherit'}>
                <PreviewIcon />
                <h1 style={{fontSize:"12px",color:"gray",marginTop:"10px"}}>Add Users</h1>

              </IconButton>
              
            </>
          )}
          {(userRole === 'User' || userRole === 'HouseOwner') && (
            <>
              <IconButton onClick={() => handleIconClick(0)} color={selectedIcon === 0 ? 'primary' : 'inherit'}>
                <HouseIcon />
              </IconButton>
              <IconButton onClick={() => handleIconClick(1)} color={selectedIcon === 1 ? 'primary' : 'inherit'}>
                <QuestionAnswerIcon />
              </IconButton>
            </>
          )}
        </div>
        <Button color="inherit" onClick={() => signOut()}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
