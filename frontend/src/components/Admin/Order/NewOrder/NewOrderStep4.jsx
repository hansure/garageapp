// components/Stage4.js

import React, { useState } from 'react';
import { Container, Typography, Paper, Checkbox, FormControlLabel, TextField, Button, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';
import InformationPage from './InformationPage'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: '#f5f5f5', // Light gray background
  borderRadius: '8px',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f44336', // Red background color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d32f2f', // Darker shade of red on hover
  },
}));

const NewOrderStep4 = () => {
  const [oilChangeSelected, setOilChangeSelected] = useState(false);
  const [serviceDescription, setServiceDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleOilChangeToggle = () => {
    setOilChangeSelected(!oilChangeSelected);
  };

   // Dummy data
  const customerInfo = {
    name: 'Jasmin Albeshir',
    email: 'jasmin@gmail.com',
    phoneNumber: '0976758475',
    activeCustomer: 'Yes', // Assuming this is a string representation
  };

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., send data to backend
    console.log('Service Description:', serviceDescription);
    console.log('Price:', price);
    // Reset form fields if needed
    setServiceDescription('');
    setPrice('');
  };

  return (
    <Container maxWidth="md">
      <InformationPage customerInfo = {customerInfo}/>
      <InformationPage customerInfo = {customerInfo}/>
      <StyledPaper elevation={3}>
        <Typography variant="h5" component="h2" color="error">
          Choose service
        </Typography>
        <FormControlLabel
          control={<Checkbox checked={oilChangeSelected} onChange={handleOilChangeToggle} />}
          label="Oil change"
        />
        <Typography variant="body1" component="p">
          Every 5,000 kilometres or so, you need to change the oil in your engine, helping it start.
        </Typography>
      </StyledPaper>

      <StyledPaper elevation={3}>
        <Typography variant="h5" component="h2" color="error">
          Additional requests
        </Typography>
        <TextareaAutosize
          aria-label="service-description"
          placeholder="Enter service description"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          minRows={8}
          style={{ width: '100%', marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          variant="outlined"
          style={{ marginBottom: '16px' }}
        />
        <SubmitButton variant="contained" onClick={handleSubmit}>
          Submit Order
        </SubmitButton>
      </StyledPaper>
    </Container>
  );
};

export default NewOrderStep4;



// import React from 'react';
// import { Typography, Button } from '@mui/material';

// const NewOrderStep4 = ({ formData, selectedServices, onBack, onSubmit }) => {
//   return (
//     <div>
//       <Typography variant="h6">Review Your Order</Typography>
//       <Typography>Customer: {formData.firstName} {formData.lastName}</Typography>
//       <Typography>Vehicle: {formData.vehicleColor} {formData.vehicleTag}</Typography>
//       <Typography>Selected Services: {selectedServices.join(', ')}</Typography>
//       <Button variant="contained" onClick={onBack}>
//         Back
//       </Button>
//       <Button variant="contained" color="primary" onClick={onSubmit}>
//         Submit Order
//       </Button>
//     </div>
//   );
// };

// export default NewOrderStep4;
