import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import { Stack } from '@mui/material'
import AddCustomerForm from "../../components/Admin/Customers/AddCustomerForm"

const AddCustomer = () => {
  return (
    <Stack direction='row' spacing={{xs:1, sm: 3, md:4, lg:6}} sx={{
      bgcolor:'#bbbcbd',
      p: 2 
    }}>
    <AdminMenu/>
    <AddCustomerForm/>
    </Stack>
  )
}

export default AddCustomer