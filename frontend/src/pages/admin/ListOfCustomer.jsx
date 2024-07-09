import React from 'react'
import CustomersTable from '../../components/Admin/Customers/ListOfCustomers'
import { Stack, Typography, Box } from '@mui/material'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import FullSearchBar from '../../components/Admin/Customers/FullSearchBar'

const ListOfCustomer = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 5, md:8}} sx={{
      bgcolor:'#bbbcbd'
    }}>
      <AdminMenu/>
      <Stack sx={{
        marginTop:{xs:'8px', sm:'12px', md:'16', lg:'24px'}
      }}>
        <Typography variant="h6" fontWeight="bold">
          Customers <span style={{color:'red'}}>___</span>
        </Typography>
        <FullSearchBar/>
      <CustomersTable />
      </Stack>
      </Stack>
  )
}

export default ListOfCustomer