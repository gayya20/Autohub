import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '@asgardeo/auth-react';
import pic from "../../assets/2.png";

export default function HomeHeader() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          {/* Image */}
          <img src={pic} alt="Logo" style={{ height: '10px', marginRight: '46px' }} />

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            auto hub
          </Typography>
          
          {/* Menu Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
