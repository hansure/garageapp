import { Box, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from "../../Contexts/AuthContext"

const TopHeader = () => {
const {isLogged, setIsLogged, employee} = useAuth()
console.log(employee)
  return (
    <Box sx={{
        display:{xs:'none', sm:'flex'},
        direction:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        bgcolor:'#112557',
        width:'100%',
        position:'static'
    }}>
        <Box sx={{
            bgcolor:'#f56042',
            color:'white',
            px:{xs:'5px', sm:'8px', md:'16px'},
        }}>
            <Typography>Enjoy free wifi while we fix your car</Typography>
        </Box>
        <Box sx={{
            display:'flex',
            direction:'row',
            justifyContent:'space-between',
            alignItems:'space-between', 
            color:'white',
            px:{xs:'5px', sm:'8px', md:'16px'},
        }}>
            <Typography sx={{
                px:{xs:'5px', sm:'8px', md:'16px'},
            }}>Monday - Saturday 8:00AM - 5:30PM</Typography>
            {
                isLogged ? (
                    <Typography  sx={{
                px:{xs:'20px', sm:'30px', md:'360px'}, textAlign:'left'
            }}><strong>Welcome {employee?.employee_first_name} </strong></Typography>
                ) : (
                    <Typography sx={{
                px:{xs:'10px', sm:'16px', md:'36px'}, textAlign:'left'
            }}>Schedule Your Appointment +251978675645 / +251975643990</Typography>
                )
            }
        </Box>
    </Box>
  )
}

export default TopHeader