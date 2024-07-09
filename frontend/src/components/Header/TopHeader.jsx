import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from "../../Contexts/AuthContext";

const TopHeader = () => {
  const { isLogged, employee } = useAuth();

  return (
    <Box sx={{
      display: { xs: 'none', sm: 'flex' },
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      bgcolor: '#112557',
      width: '100%',
      position: 'static',
      p: 1,
      color: 'white'
    }}>
      <Box sx={{
        bgcolor: '#f56042',
        color: 'white',
        px: { xs: '5px', sm: '8px', md: '16px' },
        py: 1
      }}>
        <Typography variant="body2">Enjoy free wifi while we fix your car</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        px: { xs: '5px', sm: '8px', md: '16px' },
      }}>
        <Typography variant="body2" sx={{
          px: { xs: '5px', sm: '8px', md: '16px' },
        }}>Monday - Saturday 8:00AM - 5:30PM</Typography>
        {isLogged ? (
          <Typography variant="body2" sx={{
            px: { xs: '10px', sm: '16px', md: '36px' },
          }}><strong>Welcome {employee?.employee_first_name}</strong></Typography>
        ) : (
          <Typography variant="body2" sx={{
            px: { xs: '10px', sm: '16px', md: '36px' },
          }}>Schedule Your Appointment +251978675645 / +251975643990</Typography>
        )}
      </Box>
    </Box>
  );
}

export default TopHeader;