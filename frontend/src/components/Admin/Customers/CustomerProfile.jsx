import React from 'react'
import {Stack, Box, Typography, IconButton, Divider, Paper, Button} from '@mui/material'
import CircularTextIcon from "./CircularTextIcon"
import EditIcon from '@mui/icons-material/Edit';
import VerticalDivider from './VerticalDivider';

const CustomerProfile = () => {
  return (
    <Box sx={{
        display:'flex',
        flexDirection: 'column'
    }}>
        <Stack direction="row" spacing={4} my= "12px">
        <Box >
            <CircularTextIcon text="Info" />
        </Box>
        <Box>
            <Box sx={{
                display:'flex',
                dirction:'row'
            }}>
                <Typography variant="h6" fontWeight='bold'>Customer:</Typography>
                <Typography variant="h6"> Surafel Melese</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                dirction:'row'
            }}>
                <Typography variant="body2" fontWeight='bold'>Email:</Typography>
                <Typography variant="body2">test@garage.com</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                dirction:'row'
            }}>
                <Typography variant="body2" fontWeight='bold'>Phone Number:</Typography>
                <Typography variant="body2">+251768758475</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                dirction:'row'
            }}>
                <Typography variant="body2" fontWeight='bold'>Active Customer:</Typography>
                <Typography variant="body2">Yes</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                dirction:'row'
            }}>
                <Typography variant="body2" fontWeight='bold'>Edit customer info:</Typography>
                <IconButton color="primary" sx={{
                    maxHeight:'2px'
                }}>
                    <EditIcon />
                </IconButton>
            </Box>
        </Box>
    </Stack>
    <Divider orientation="vertical" flexItem sx={{
        float: 'left',
        height:"45px"
    }}/>
    <Stack direction="row" spacing={4} my= "36px">
        <Box >
            <CircularTextIcon text="Cars" />
        </Box>
        <Box>
            <Typography variant="h6" fontWeight="bold">Vehicles of Adugna</Typography>
            <Paper>No vehicles found</Paper>
            <Button variant="contained" color="primary">
                ADD NEW VEHICLE
        </Button>
        </Box>
    </Stack>
    </Box>
  )
}

export default CustomerProfile