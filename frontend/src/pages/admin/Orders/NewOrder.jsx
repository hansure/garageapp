import React from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu'
import { Stack } from '@mui/material'
import NewOrder from '../../../components/Admin/Order/NewOrder/Index'

const AddCustomer = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 6, md:10, lg:14}} sx={{
      bgcolor:'#bbbcbd'
    }}>
    <AdminMenu/>
    <NewOrder/>
    </Stack>
  )
}

export default AddCustomer