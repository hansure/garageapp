import React from 'react';
import { Typography, Stack, Box, Paper, Button } from '@mui/material';

const ScheduleAdvert = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        my: '16px',
      }}
    >
      <Paper
        sx={{
          width: { xs: 300, sm: 350, md: 650, lg: 750 },
          padding: 2,
          bgcolor: 'red',
          color: 'white',
          textAlign: 'center',
        }}
        elevation={3} // Adjust elevation for shadow effect
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Schedule Your Appointment Today</Typography>
          <Typography variant="body2">Your Automotive Repair & Maintenance Service Specialist</Typography>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h5" sx={{ mx: 1 }}>
              +251767418077 / +251956778899
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ScheduleAdvert;
