import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/images/Logo.jpg'
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext"
import { logOutEmployeeService } from '../../services/login.service'

const drawerWidth = 240;
const navItems = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about-us" },
  { text: "Services", path: "/Services" },
  { text: "Contact Us", path: "/contact-us" },
  // { text: "Admin", path: "/admin/dashboard" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isLogged, setIsLogged, employee } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logOut = () => {
    logOutEmployeeService();
    setIsLogged(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <Button color="primary" variant="contained" sx={{ marginTop: '3px' }}>
          {isLogged ? (
            <Link to="/" onClick={logOut} style={{ color: 'white', textDecoration: 'none' }}>
              Logout
            </Link>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Login
            </Link>
          )}
        </Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', overflowX: 'hidden', width: '100%' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" style={{ backgroundColor: 'white', color: 'black' }} sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} href={item.path} sx={{ color: '#000' }}>
                {item.text}
              </Button>
            ))}
          </Box>
          <div>
            {isLogged ? (
              <Button key='admin' href="/admin/dashboard" sx={{ color: '#000' }}>
                Admin
              </Button>
            ):("")}
            </div>
          <Divider orientation="vertical" flexItem />
          <Button color="primary" variant="contained" sx={{ marginLeft: '5px', display: { xs: 'none', md: 'block' } }}>
            {isLogged ? (
              <Link to="/" onClick={logOut} style={{ color: 'white', textDecoration: 'none' }}>
                Logout
              </Link>
            ) : (
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
            )}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0.2, width: '100%' }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
