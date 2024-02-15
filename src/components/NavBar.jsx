import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import { Image } from 'mui-image'
import tempImg from '../img/Profile picture.jpg'
import LineWeightIcon from '@mui/icons-material/LineWeight';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
      <>
      <Container  maxWidth="sm" >
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Kaleab's Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <h3 style={{textAlign: 'left'}}>Kaleab's</h3>  &nbsp; 
              <Image src={tempImg} alt='Profile Picture' style={{width:'35px', height: '35px',display: 'block', marginLeft:'auto',marginRight:'auto', borderRadius:'50%'}}/>
              {theme.direction === 'ltr' ? (<ChevronLeftIcon />) : ( <ChevronRightIcon />)}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List >    
              <ListItem  onClick={() => {navigate("/")}} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LineWeightIcon/>
                  </ListItemIcon>
                  <ListItemText primary="DashBoard" />
                </ListItemButton>
              </ListItem>
               
              <ListItem  onClick={() => {navigate("/Resume")}} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LineWeightIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </ListItem>

              <ListItem onClick={() => {navigate("/ToDoList")}} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LineWeightIcon/>
                  </ListItemIcon>
                  <ListItemText primary="ToDoList" />
                </ListItemButton>
              </ListItem>

              <ListItem  onClick={() => {navigate("/Pokedex")}} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LineWeightIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Pokedex" />
                </ListItemButton>
              </ListItem>

              <ListItem  onClick={() => {navigate("/Form")}} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LineWeightIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Form" />
                </ListItemButton>
              </ListItem>
          </List>
        </Drawer>
      </Box>
      </Container>
      </>
    )
}

export default NavBar