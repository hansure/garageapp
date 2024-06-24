import React from 'react';
import { Paper, Typography, IconButton, Box, Container   } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ServiceCard = ({ serviceName, serviceDescription, onEdit, onDelete }) => {
  return (
    <Container maxWidth="md">
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', position: 'relative' }}>
      <Typography variant="h6" gutterBottom>
        {serviceName}
      </Typography>

      <Typography variant="body1" paragraph>
        {serviceDescription}
      </Typography>

      <Box
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton color="primary" onClick={onEdit}>
          <EditIcon />
        </IconButton>

        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Paper>
    </Container>
  );
};

export default ServiceCard;
