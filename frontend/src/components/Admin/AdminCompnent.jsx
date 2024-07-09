import React from 'react';
import { Box, Stack, Typography, Grid, Paper, Button } from "@mui/material";

const AdminComponent = () => {
  const serviceItems = [
    { title: 'All Orders', description: 'OPEN FOR ALL', linkText: 'LIST OF ORDERS +' },
    { title: 'New Orders', description: 'OPEN FOR LEADS', linkText: 'ADD ORDERS +' },
    { title: 'Employees', description: 'OPEN FOR ADMINS', linkText: 'LIST OF EMPLOYEES +' },
    { title: 'Add Employee', description: 'OPEN FOR ADMINS', linkText: 'READ MORE +' },
    { title: 'Engine Service & Repair', description: 'SERVICES AND REPAIRS', linkText: 'READ MORE +' },
    { title: 'Tyre & Wheels', description: 'SERVICE AND REPAIRS', linkText: 'READ MORE +' },
    { title: 'Denting & Painting', description: 'SERVICES AND REPAIRS', linkText: 'READ MORE +' },
    { title: 'Engine Service & Repair', description: 'SERVICES AND REPAIRS', linkText: 'READ MORE +' },
    { title: 'Tyre & Wheels', description: 'SERVICE AND REPAIRS', linkText: 'READ MORE +' },
  ];

  return (
    <Box sx={{ backgroundColor: '#e3e3e3', p: 2}}>
      <Stack direction='column' sx={{ justifyContent: 'center', my: 8, marginLeft: { xs: '1vh', md: '3vh' }, marginRight: { xs: '1vh', md: '6vh' } }}>
        <Typography variant='h5'>
          Our Services <span style={{ color: 'red' }}>___</span>
        </Typography>
        <Typography sx={{ my: 2 }}>
          Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
          going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
        </Typography>
        <Grid container spacing={2}>
          {serviceItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper sx={{ minHeight: '100px', p: 2 }}>
                <Typography variant="body">{item.description}</Typography>
                <Typography variant='h5'>{item.title}</Typography>
                <Button variant='text' sx={{ color: 'red', mt: 2 }}>{item.linkText}</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default AdminComponent;