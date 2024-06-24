import React from 'react'
import { Typography, Paper, Stack, Box, Button } from "@mui/material"; 

export const RequestedService = () => {
  return (
    <Paper elevation={1} spacing={1} sx={{
            minWidth:'400px',
    }}> 
        <Stack direction='row' spacing={2} sx={{
            m: 3
        }}>
            <Box>
                <Typography variant='h6' fontWeight="bold"> 
            Tire repairs and changes
        </Typography> 
        <Typography>
            Without good, inflated tires, you loose speed, control, and fuel efficiency, hence the need to get them patched 
            if there's a leak (for example, if you run over a nail), or replaced if they're too worn.
        </Typography>
            </Box>
            <Box  sx={{
            p:0
        }}>
        <Button variant='contained' sx={{maxHeight: '30px', minWidth: '30px', minHeight: '30px', borderRadius:"50px", bgcolor:'#f0bb29'}}>Inprogress</Button>
            </Box>
        </Stack>
    </Paper> 
  )
}

