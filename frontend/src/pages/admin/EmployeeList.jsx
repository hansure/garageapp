import React from 'react'
import EmployeesTable from '../../components/Admin/Employees/EmployeesTable'
import { Stack, Typography, Box } from '@mui/material'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
import FullSearchBar from '../../components/Admin/Customers/FullSearchBar'

const EmployeeList = () => {
  return (
    <Stack direction='row' spacing={{xs:2, sm: 5, md:8}} sx={{
      bgcolor:'#bbbcbd',
      m:1
    }}>
      <AdminMenu/>
      <Stack sx={{
        marginTop:{xs:'8px', sm:'12px', md:'16', lg:'24px'}
      }}>
        <Typography variant="h6" fontWeight="bold">
          Employees <span style={{color:'red'}}>___</span>
        </Typography>
        <FullSearchBar/>
      <EmployeesTable />
      </Stack>
      </Stack>
  )
}

export default EmployeeList