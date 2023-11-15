import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'


const sideBarData = [
  {
    Label:"Dashboard",
    linkName:"/dashboard"
  },
  {
    Label:"Orders",
    linkName:"/orders"
  },
  {
    Label:"New order",
    linkName:"/new_order"
  },
  {
    Label:"Add employee",
    linkName:"/add_employee"
  },
  {
    Label:"Employee",
    linkName:"/employee"
  },
  {
    Label:"Add customer",
    linkName:"/add_customer"
  },
  {
    Label:"Customers",
    linkName:"/customers"
  },
  {
    Label:"Services",
    linkName:"/services"
  },
]

const AdminMenu = () => {
  return (
    <Stack sx={{
      width: "20%"
    }}>
      <Box sx={{
        bgcolor:'#1d1f1d',
        p:'8px',
        color:'#ffffff'
      }}>
        <Typography variant='h5'>ADMIN MENU</Typography>
      </Box>
      <Box sx={{
        bgcolor: '#11243d'
      }}>
        {
          sideBarData.map((data)=>(
            <>
            <Box sx={{
                p:'8px',
                color:'#ffffff'
              }}>
                <Button variant='text' href={data.linkName}>{data.Label}</Button>
            </Box>
            <Divider color="#5e5858" sx={{ height: 2 }}/>
            </>
          ))
        }
      </Box>
    </Stack>
  )
}

export default AdminMenu