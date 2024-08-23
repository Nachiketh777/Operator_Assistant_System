import * as React from 'react';
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
import SpeedIcon from '@mui/icons-material/Speed'; 
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import ViewListIcon from '@mui/icons-material/ViewList';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TableCom from "./Components/AddTemp";
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TuneIcon from '@mui/icons-material/Tune';
import AssessmentIcon from '@mui/icons-material/Assessment';



const drawerWidth = 240;




const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

 

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

 

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

 

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

 

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const addToNavHistory = (data) => {
    setNavHistory(navHistory.push(data))
  }
  // const login = props.logedIn;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [authenticated, setAuthenticated] = React.useState(false)
  const [navHistory, setNavHistory] = React.useState([{name:"Home", url:"127.0.0.1:3000"}])
  const location = useLocation()
  const Navigate = useNavigate()
  
  const handleLogOut = () => {
    localStorage.removeItem('auth');
    Navigate("/login")
    
   }
  React.useEffect(()=>{
    // const loggedInUser = localStorage.getItem("authentication");
    // console.log("LoggedInUser: "+loggedInUser)
 
    const loggedInUser = localStorage.getItem('auth')
    // console.log("User:",location.state.loginState)
    console.log(loggedInUser)
    console.log(loggedInUser == null)

    




    if(!loggedInUser){
      Navigate("/login")
    }else{
      //code
      setAuthenticated(loggedInUser)
  
    }

 
  }, [])
if(authenticated){
return(
   
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
      <Toolbar>
      <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                  }}
      >
      {
      !open ? <MenuIcon /> : <ChevronLeftIcon />
      }
      
      </IconButton>
      <Typography variant="h6" noWrap component="div">
                  Shop Floor Management
      </Typography>
      {/* Icon Code */}
      <Box sx={{ flexGrow: 1 }} />
                          <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                              <IconButton
                                  title='User Profile'
                                  size="large"
                                  edge="end"
                                  aria-label="account of current user"
      
                                  aria-haspopup="true"
      
                                  color="inherit"
                              >
                                  <AccountCircle />
                              </IconButton>
                              <IconButton
                                  title='Logout'
                                  size="large"
                                  aria-label="Logout"
                                  color="inherit"
                                  onClick={()=>handleLogOut()}
      
                              >
      
                                  <LogoutRoundedIcon />
      
                              </IconButton>
                          </Box>
      </Toolbar>
      <Box>
      
      {navHistory.forEach( navData => {
        console.log(navData.name);
        <Box sx={{bgcolor:'gray', width:'100%', height:'50px', mb:0,display:"flex", alignItems:"center", paddingLeft:8}}>navData.name
        <Link style={{textDecoration:"none", color:"black"}} to="/template" underline="none" color="inherit">navData.name</Link>
        </Box>
      })}
      </Box>
      </AppBar>
      
      <Drawer variant="permanent" open={open}>
      <DrawerHeader />
      <DrawerHeader />
      {/* <h1>Hi</h1> */}
      
      
      
      <List>
                
      <ListItem  disablePadding sx={{ display: 'block' }}>
      <Link style={{textDecoration:"none", color:"black"}} to="/dashboard" underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><SpeedIcon sx={{color:"#1976D2"}}/></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>DashBoard</ListItemText>
      </ListItemButton>
      </Link>
      {/* <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><WorkIcon /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>Sales</ListItemText>
      </ListItemButton> */}
      <Link style={{textDecoration:"none", color:"black"}} to="/template" underline="none" color="inherit">
      <ListItemButton 
      
                      // href="/table"
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><ContentPasteIcon  sx={{color:"#1976D2"}} /></IconButton>
      </ListItemIcon>
      
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>Template</ListItemText>
      </ListItemButton>
      </Link>
      {/* <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><CalendarMonthIcon /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>Track</ListItemText>
      </ListItemButton> */}
      {/* <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><BuildIcon /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>Config</ListItemText>
      </ListItemButton> */}
      <Link style={{textDecoration:"none", color:"black"}} to="/template2" underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><TuneIcon sx={{color:"#1976D2"}} /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>partNo & Template<br />assignment</ListItemText>
      </ListItemButton>
      </Link>
      {/* <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><SettingsIcon /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0, }}>Configuration</ListItemText>
      </ListItemButton> */}
      <Link style={{textDecoration:"none", color:"black"}} to="/qcactual" underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><EditIcon sx={{color:"#1976D2"}}/></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>QC Actual Data <br /> Entry</ListItemText>
      </ListItemButton>
      </Link>
      <Link style={{textDecoration:"none", color:"black"}} to="/qcresult" underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><ViewListIcon sx={{color:"#1976D2"}}/></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>QC Result</ListItemText>
      </ListItemButton>
      </Link>
      <Link  style={{textDecoration:"none", color:"black"}} to='/qcreport' underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><AssessmentIcon sx={{color:"#1976D2"}} /></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>Report</ListItemText>
      </ListItemButton>
      </Link>
      {/* <Link style={{textDecoration:"none", color:"black"}} to="/qcreport/qcview" underline="none" color="inherit">
      <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
      >
      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
      >                 
                        <IconButton><ViewListIcon sx={{color:"#1976D2"}}/></IconButton>
      </ListItemIcon>
      <ListItemText  sx={{ opacity: open ? 1 : 0 }}>QC Report</ListItemText>
      </ListItemButton>
      </Link> */}
      </ListItem>
      </List>
      
       {/* <Divider /> */}  
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* <DrawerHeader /> */}
      <DrawerHeader />
      <Outlet />
      {/* <TableCom /> */}
      </Box>
      </Box>
        
        
)
                      }

// }else{
//   return (
//     <div>
//       <h1>404</h1>
//     </div>
//   )
// }
}