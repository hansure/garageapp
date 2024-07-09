import React from 'react';
import { Typography, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  position: 'relative',
  backgroundColor: '#f5f5f5', // Example background color
  borderRadius: '8px',
  '& .sectionHeader': {
    marginBottom: theme.spacing(2),
    color: '#f44336', // Red color
  },
  '& .customerInfo': {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  '& .actionButton': {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: '#f44336', // Red color
  },
}));


const InformationPage = ({customerInfo}) => {
  return (
    <StyledPaper elevation={3}>
        <Typography variant="h5" component="h2" className="sectionHeader">
          Create a new order
        </Typography>
        <Typography variant="h6" component="h3" className="customerInfo">
          Name: {customerInfo.name}
        </Typography>
        <Typography variant="body1" component="p" className="customerInfo">
          Email: {customerInfo.email}
        </Typography>
        <Typography variant="body1" component="p" className="customerInfo">
          Phone Number: {customerInfo.phoneNumber}
        </Typography>
        <Typography variant="body1" component="p" className="customerInfo">
          Active Customer: {customerInfo.activeCustomer}
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Typography>
        <IconButton aria-label="delete" className="actionButton">
          <DeleteIcon />
        </IconButton>
      </StyledPaper>
  )
}

export default InformationPage