import React from 'react';
import { Stack, Typography, Button, Box, Divider, Grid, Container } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import addService from '../../assets/images/service.jpg';
import icon1 from '../../assets/template_assets/images/icons/icon1.png';

const additionalServices = [
  'General Auto Repair & Maintenance',
  'Transmission Repair & Replacement',
  'Tire Repair and Replacement',
  'State Emissions Inspection',
  'Brake Job / Brake Service',
  'Electrical Diagnostics',
  'Fuel System Repairs',
  'Starting and Charging Repair',
  'Steering and Suspension Work',
  'Emission Repair Facility',
  'Wheel Alignment',
  'Computer Diagnostic Testing'
];

const YchooseUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Why Choose Us ___
            </Typography>
            <Typography paragraph>
              Bring to the table win-win survival strategies to ensure proactive domination.
              At the end of the day, going forward, a new normal that has evolved from
              generation heading towards.
            </Typography>
            <Stack spacing={2}>
              <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Certified Expert Mechanics
              </Button>
              <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Quality Auto Parts
              </Button>
              <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Affordable Prices
              </Button>
              <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Fast and Reliable Service
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Additional Services ___
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  maxWidth: 150,
                  height: 'auto',
                  mx: 'auto',
                }}
                src={addService}
                alt="Additional Services"
              />
              <Stack spacing={2}>
                {additionalServices.map((item, index) => (
                  <Stack direction="row" spacing={2} key={index} alignItems="center">
                    <Box
                      component="img"
                      sx={{
                        width: 24,
                        height: 24,
                      }}
                      src={icon1}
                      alt="Service Icon"
                    />
                    <Typography variant="body1">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default YchooseUs;