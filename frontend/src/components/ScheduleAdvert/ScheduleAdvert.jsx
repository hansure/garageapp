import * as React from 'react';
import { Typography, styled, Stack, Box, Paper, Button  } from '@mui/material';

const AdverPaper = styled(Paper)(({ theme }) => ({
  width: {xs: 300, sm: 350, md: 650, lg:750},
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

function ScheduleAdvert() {
  return (
    <Stack sx={{
        justifyContent:'center',
        alignItems: 'center',
        my:'16px',
    }}>
      <AdverPaper variant="elevation" sx={{
        bgcolor:'red',
        color:'white'
      }}>
        <Stack direction='row' sx={{
            justifyContent:'space-between',
        }}>
            <Stack direction='column'>
                <Typography variant='h5'>Schedule Your Appointment Today</Typography>
                <Typography variant='body2'>Your automative Repair & Maintenance Service Specialist</Typography>
            </Stack>
                <Typography variant='h5' sx={{
                    alignItems:'center',
                    justifyContent:'center',
                    mx:'8px'
                }}>+251767418077/+251956778899</Typography>
            <Button variant='contained' sx={{
                mx:'5px'
            }}>
                Contact Us
            </Button>
        </Stack>
      </AdverPaper>
    </Stack>
  );
} 

export default ScheduleAdvert