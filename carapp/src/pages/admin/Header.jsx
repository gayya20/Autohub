import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '@asgardeo/auth-react';



export default function Header() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            auto hub
          </Typography>
          <IconList>
        {userRole === 'Admin' && (
          <>
            <ListItem onClick={() => handleIconClick(0)} className={selectedIcon === 0 ? 'selected' : ''}>
              <NavIcon as={House} />
            </ListItem>
            <ListItem onClick={() => handleIconClick(1)} className={selectedIcon === 1 ? 'selected' : ''}>
              <NavIcon as={PeopleAlt} />
            </ListItem>
          </>
        )}
        {(userRole === 'User' || userRole === 'HouseOwner') && (
          <>
            <ListItem onClick={() => handleIconClick(0)} className={selectedIcon === 0 ? 'selected' : ''}>
              <NavIcon as={House} />
            </ListItem>
            <ListItem onClick={() => handleIconClick(1)} className={selectedIcon === 1 ? 'selected' : ''}>
              <NavIcon as={QuestionAnswer} />
            </ListItem>
          </>
        )}
      </IconList>
          <Button color="inherit" onClick={ () => signOut() } >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
