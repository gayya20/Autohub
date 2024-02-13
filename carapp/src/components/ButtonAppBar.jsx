import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '@asgardeo/auth-react';
import img from "../../src/assets/AUTO.png"



export default function ButtonAppBar() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img />
          </IconButton> */}
                <img src={img} alt="AutoHub Logo" style={{ width: "100px", height: "50px", marginTop: "" }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            auto hub
          </Typography>
          <Button color="inherit" onClick={ () => signOut() } >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
