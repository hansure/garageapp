import React from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu'
import { Stack, Typography } from '@mui/material'
import OrdersPage from '../../../components/Admin/Order/Orders'

const Orders = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 5, md:8}} sx={{
      bgcolor:'#bbbcbd',
      m:2
    }}>
      <AdminMenu/>
      <Stack sx={{
        marginTop:{xs:'8px', sm:'12px', md:'16', lg:'24px'}
      }}>
        <Typography variant="h6" fontWeight="bold">
          Orders <span style={{color:'red'}}>___</span>
        </Typography>
    <OrdersPage/>
      </Stack>
      </Stack>
  )
}

export default Orders