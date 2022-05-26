import * as React from 'react';
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{color:"white",backgroundColor: "rgb(25, 25, 74)"}} />
      <Divider />
      <List>
        {['Dashboard', 'Profile', 'Analysis', 'Accounting','Messages','Projects'].map((text, index) => (
          <ListItem sx={{color:"rgb(220, 212, 212)",backgroundColor: "rgb(25, 25, 74)"}} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"white"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{color:"white",backgroundColor: "rgb(25, 25, 74)"}}>
        <br />
        <br />
        <br />
        <br /><br />
        <br />
        <br />
        <br /><br />
        <br />
        <br />
        {['Settings', 'Info'].map((text, index) => (
          <ListItem sx={{color:"rgb(220, 212, 212)",backgroundColor: "rgb(25, 25, 74)",marginBottom:"23px",height:"30px"}} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color:"white"}}>
                {index % 2 === 0 ? <InboxIcon />  : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{color:"white",backgroundColor: "rgb(229, 217, 240)"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{color: "black",fontWeight:"600",fontSize: "26px",fontFamily:"Georgia, 'Times New Roman', Times, serif"}} variant="h6" noWrap component="div">
            DashBoard
           <input className='search' type="text" placeholder='Search' />
           <SearchIcon className='search-icons' />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,color: "blue" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Button sx={{color:"red",border: "1px solid green",position: "absolute",left:"81%",top:"13%"}} variant="outlined" size="large">
           Sign Up
           </Button>
           <Button sx={{color:"red",border: "1px solid green",margin:"10px",position: "absolute",left:"89%"}} variant="outlined" size="large">
          Sign In
          </Button>
        
      </Box>
    </Box>

  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
