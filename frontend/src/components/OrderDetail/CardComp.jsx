import React from 'react'
import { Typography, Paper, Divider, Stack, Box, Button } from "@mui/material"; 

// CardComp component to display user information in a card format
export const CardComp = ({typeOfData, fname, email, phoneNumber, status}) => {
    return (
        <Paper elevation={.5} sx={
            {
                minWidth:'400px',
                bgcolor:'#fff',
                m:6
            }
        }> 
            <Box sx={{
                m: 3
            }}>
                <Box sx={
                {
                    marginBottom: 4,
                }
            }>
                <Typography variant ='body2'>{typeOfData}</Typography>
                <Typography variant ='6' fontWeight="bold">{fname}</Typography>
            </Box>
            <Box sx={
                {
                    display:'flex',
                    direction:'row',
                }
            }>
               <Typography>Email:</Typography>
                <Typography variant='body2'>{email}</Typography>
            </Box>
            
            <Box sx={
                {
                    display:'flex',
                    direction:'row',
                }
            }><Typography>Phone number:</Typography>
                <Typography variant='body2'>{phoneNumber}</Typography>
            </Box>
            
            <Box sx={
                {
                    display:'flex',
                    direction:'row',
                }
            }>
                <Typography>Active customer:</Typography>
                <Typography variant='body2'>{status}</Typography>
            </Box>
            </Box>
            <Divider sx={{ bgcolor: 'red', height:"3px" }} />
        </Paper> 
    )
}
//
//In this code, we have a `CardComp` component that takes in five props: `typeOfData`, `fname`, `email`, `phoneNumber`, and `status`. These props are used to display the user's information in a card format.
//
//The component starts by rendering a `Paper` component from Material-UI. This component serves as the background of the card. The `Paper` component has a `maxWidth` of 300px, a white background color, and a margin of .
//
//Inside the `Paper` component, we have a `Box` component that serves as a container for the user's data. type of name andBox` component has a margin at the top and bottom of 3px and 4px, respectively.
//
//Next, we have three `Box` components that serve as containers for the user's email, phone number, and status. Each `Box` component has a `display` property set to 'flex' and a `direction` property set to 'row'. This allows the text and the user's information to be displayed in a row.
//
//Finally, we have a `Divider` component that serves as a visual separator between the user's information and the actions that can be performed