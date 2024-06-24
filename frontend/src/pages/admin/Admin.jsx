import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import { Stack } from '@mui/material'
import AdminComponent from '../../components/Admin/AdminCompnent'

const Admin = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 6, md:10, lg:14}} sx={{
      bgcolor:'#bbbcbd'
    }}>
    <AdminMenu/>
    <AdminComponent/>
    </Stack>
  )
}

export default Admin