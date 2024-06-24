import { Stack, Typography, Button, Box, Divider, Grid, Container } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react'
import addService from '../../assets/images/service.jpg'
import icon1 from '../../assets/template_assets/images/icons/icon1.png'

const addationalService = [
  'Genera Auto Repair & Maintainance',
  'Transmission Repair & Replacement',
  'Tire Repair and Replacement',
  'State Emissions Inspection',
  'Break Job / Break Service',
  'Electrival Diagnostics',
  'Fuel System Repairs',
  'Starting and Charging Repair',
  'Steering and Suspension Work',
  'Emission Repair Facility',
  'Wheel Alignment',
  'Computer Diagnostic Testing'
]

const YchooseUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
    <Container maxWidth="lg">
    <Grid container spacing={5}>
        <Grid item xs={12} sm={4} md={5} lg={6}>
            <Typography variant='h5'>Why Choose Us ___</Typography>
            <Typography>
                Bring to the table win-win survival strategies to ensure proactive domination
                At the end of the day, going forward, a new normal that has evolved from
                generation heading towards.
            </Typography>
            <Stack>
                <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Certified Expert Mechanics
                </Button>
            <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Certified Expert Mechanics
                </Button>
            <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Certified Expert Mechanics
                </Button>
            <Button component="label" variant="text" startIcon={<CloudUploadIcon />}>
                Certified Expert Mechanics
                </Button>
            </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={5} lg={6} sx={{ 
            bgcolor: "#fdfgff" 
            }}>
            <Typography variant='h5'>Additional Services ___</Typography>
            <Stack direction='row'>
              <Grid item xs={12} sm={4} >
              <Box
              component="img"
              sx={{
                  height: 300,
                  width:{xs:100, sm:120, md:150},
              }}  
              src={addService}/>
            </Grid>
            <Grid item xs={12} sm={8}>
                  {
                    addationalService && addationalService.map((item) => (
              <Stack direction='row'>
                      <Grid item xs={2}>
                    <Box
                component="img"
                src={icon1}/>
                  </Grid>
                  <Grid item xs={10}>
                        <Typography variant={{xs:'body2', sm:'h6'}}>{item}</Typography>
                  </Grid>
              </Stack>
                      ))
                  }
            </Grid>
            </Stack>
        </Grid>
    </Grid>
    </Container>
    </Box>
  )
}

export default YchooseUs