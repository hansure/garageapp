import React from 'react'
import CustomerProfile from '../../components/Admin/Customers/CustomerProfile'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import {Stack} from '@mui/material'

const CustomerProfilePage = () => {
  return (
    <Stack direction="row" spacing={{xs: 2, sm: 4, md:6, lg:10}}>
      <AdminMenu/>
      <CustomerProfile/>
    </Stack>
  )
}

export default CustomerProfilePage