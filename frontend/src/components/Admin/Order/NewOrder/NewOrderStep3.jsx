// components/Stage3.js
import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InformationPage from './InformationPage'
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

const ClickableTableRow = styled(TableRow)({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f0f0f0', // Light gray background on hover
  },
});

const NewOrderStep3 = ({ selectedServices, setSelectedServices, onBack, onNext }) => {
  // Dummy data
  const customerInfo = {
    name: 'Jasmin Albeshir',
    email: 'jasmin@gmail.com',
    phoneNumber: '0976758475',
    activeCustomer: 'Yes', // Assuming this is a string representation
  };


  // const handleRowClick = (vehicle) => {
  //   // Handle row click event, e.g., navigate to vehicle details or perform an action
  //   console.log('Clicked vehicle:', vehicle);
  // };

  const vehicles = [
    { year: 2022, make: 'Toyota', model: 'Camry', tag: 'ABC123', serial: '123456789', color: 'Silver', mileage: '5000 miles' },
    // { year: 2023, make: 'Honda', model: 'Civic', tag: 'XYZ789', serial: '987654321', color: 'Black', mileage: '3000 miles' },
    // Add more vehicles as needed
  ];

  return (
    <Container maxWidth="md">
      {/* Customer Information Paper */}
      <InformationPage customerInfo = {customerInfo}/>

      {/* Choose Vehicle Paper */}
      <StyledPaper elevation={3}>
        <Typography variant="h6" component="h3" className="sectionHeader">
          Choose a vehicle
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Tag</TableCell>
                <TableCell>Serial</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Mileage</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((vehicle, index) => (
                <ClickableTableRow key={index} onClick={onNext}>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell>{vehicle.make}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.tag}</TableCell>
                  <TableCell>{vehicle.serial}</TableCell>
                  <TableCell>{vehicle.color}</TableCell>
                  <TableCell>{vehicle.mileage}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </ClickableTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </Container>
  );
};

export default NewOrderStep3;

// import React from 'react';
// import { Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';

// const services = [
//   'Oil change', 'Spark Plug replacement', 'Fuel Cap tightening',
//   'Oxygen Sensor replacement', 'Brake work', 'Tire repairs and changes',
//   'The ignition System', 'Programming the camera software', 'Other'
// ];

// const NewOrderStep3 = ({ selectedServices, setSelectedServices, onBack, onNext }) => {
//   const handleServiceToggle = (service) => () => {
//     const currentIndex = selectedServices.indexOf(service);
//     const newSelectedServices = [...selectedServices];

//     if (currentIndex === -1) {
//       newSelectedServices.push(service);
//     } else {
//       newSelectedServices.splice(currentIndex, 1);
//     }

//     setSelectedServices(newSelectedServices);
//   };

//   return (
//     <div>
//       <FormGroup>
//         {services.map((service) => (
//           <FormControlLabel
//             key={service}
//             control={<Checkbox checked={selectedServices.includes(service)} onChange={handleServiceToggle(service)} />}
//             label={service}
//           />
//         ))}
//       </FormGroup>
//       <Button variant="contained" onClick={onBack}>
//         Back
//       </Button>
//       <Button variant="contained" color="primary" onClick={onNext}>
//         Next
//       </Button>
//     </div>
//   );
// };

// export default NewOrderStep3;
