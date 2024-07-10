import { Box } from '@mui/material';
import React from 'react';

function Unauthorized() {
  return (
    <Box sx={{
      my:16,
      display:"flex",
      justifyContent:"center"
    }}>
      <h1>You don't have the authorization to access the page you requested</h1>
    </Box>
  );
}

export default Unauthorized; 