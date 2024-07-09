import React from 'react';
import { Stack } from '@mui/material';
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import AdminComponent from '../../components/Admin/AdminCompnent'; // Assuming this is correctly imported

const Admin = () => {
  return (
    <Stack direction='row' sx={{ bgcolor: '#bbbcbd', p: 2 }}>
      <AdminMenu />
      <AdminComponent />
    </Stack>
  );
};

export default Admin;