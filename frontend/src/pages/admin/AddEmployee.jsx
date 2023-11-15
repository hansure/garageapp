import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import { Stack } from '@mui/material'
import AddEmployeeForm from '../../components/Admin/AddEmployeeForm/AddEmployeeForm'

const AddEmployee = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 6, md:10, lg:14}} sx={{
      bgcolor:'#bbbcbd'
    }}>
    <AdminMenu/>
    <AddEmployeeForm/>
    </Stack>
  )
}

export default AddEmployee