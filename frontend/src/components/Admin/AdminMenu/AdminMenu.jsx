import React, { useState, useRef } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Button, Divider, Stack, Typography  } from '@mui/material';
import { Menu as MenuIcon, Dashboard as DashboardIcon, Receipt as OrdersIcon, NoteAdd as NewOrderIcon, PersonAdd as AddEmployeeIcon, Group as EmployeesIcon, PersonAdd as AddCustomerIcon, People as CustomersIcon, RoomService as ServicesIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // If using React Router, adjust accordingly

const links = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
  { text: 'Orders', icon: <OrdersIcon />, path: '/admin/orders' },
  { text: 'New Order', icon: <NewOrderIcon />, path: '/admin/new-order' },
  { text: 'Add Employee', icon: <AddEmployeeIcon />, path: '/admin/add-employee' },
  { text: 'Employees', icon: <EmployeesIcon />, path: '/admin/employees' },
  { text: 'Add Customer', icon: <AddCustomerIcon />, path: '/admin/add-customer' },
  { text: 'Customers', icon: <CustomersIcon />, path: '/admin/customers' },
  { text: 'Services', icon: <ServicesIcon />, path: '/admin/services' },
];

const AdminMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current[0])

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    windowSize.current[0] > 560 ? (<Stack sx={{
      bgcolor: '#ddecf0',
      width: "25%"
    }}>
      <Box sx={{
        bgcolor:'#1d1f1d',
        p:'8px',
        color:'#ffffff'
      }}>
        <Typography variant='h5'>ADMIN MENU</Typography>
      </Box>
      <List>
          {links.map((link, index) => (
            <ListItem button key={index} component={Link} to={link.path} onClick={toggleDrawer}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
    </Stack>):(
          <div>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {links.map((link, index) => (
            <ListItem button key={index} component={Link} to={link.path} onClick={toggleDrawer}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
    )
  )
}

export default AdminMenu

// import React, { useState } from 'react';
// import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
// import { Menu as MenuIcon, Dashboard as DashboardIcon, Receipt as OrdersIcon, NoteAdd as NewOrderIcon, PersonAdd as AddEmployeeIcon, Group as EmployeesIcon, PersonAdd as AddCustomerIcon, People as CustomersIcon, RoomService as ServicesIcon } from '@mui/icons-material';
// import { Link } from 'react-router-dom'; // If using React Router, adjust accordingly

// const links = [
//   { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//   { text: 'Orders', icon: <OrdersIcon />, path: '/orders' },
//   { text: 'New Order', icon: <NewOrderIcon />, path: '/new-order' },
//   { text: 'Add Employee', icon: <AddEmployeeIcon />, path: '/add-employee' },
//   { text: 'Employees', icon: <EmployeesIcon />, path: '/employees' },
//   { text: 'Add Customer', icon: <AddCustomerIcon />, path: '/add-customer' },
//   { text: 'Customers', icon: <CustomersIcon />, path: '/customers' },
//   { text: 'Services', icon: <ServicesIcon />, path: '/services' },
// ];

// const AdminMenu = () => {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

//   return (
    // <div>
    //       <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton>

    //   <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
    //     <List>
    //       {links.map((link, index) => (
    //         <ListItem button key={index} component={Link} to={link.path} onClick={toggleDrawer}>
    //           <ListItemIcon>{link.icon}</ListItemIcon>
    //           <ListItemText primary={link.text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Drawer>
    // </div>
//   );
// };

// export default AdminMenu;

