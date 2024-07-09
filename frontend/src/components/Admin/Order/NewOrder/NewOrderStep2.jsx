// components/Stage2.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, InputAdornment, IconButton, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { styled } from '@mui/system';

const ResponsiveSearchField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
    '& fieldset': {
      borderColor: '#ced4da',
    },
    '&:hover fieldset': {
      borderColor: '#86b7fe',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#86b7fe',
    },
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
}));

const NewOrderStep2 = ({ formData, setFormData, onBack, onNext }) => {
  const [searchValue, setSearchValue] = useState('');
  const [rows, setRows] = useState([
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com' },
  ]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2} textAlign="center">
        <Typography variant="h4" component="h1" color="error">
          Create a new order
        </Typography>
      </Box>
      <ResponsiveSearchField
        variant="outlined"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  <FingerprintIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <StyledButtonContainer>
        <StyledButton variant="contained" onClick={onBack}>
          Back
        </StyledButton>
        <StyledButton variant="contained" color="primary" onClick={onNext}>
          Next
        </StyledButton>
      </StyledButtonContainer>
    </Container>
  );
};

export default NewOrderStep2;



// import React from 'react';
// import { TextField, Button } from '@mui/material';

// const NewOrderStep2 = ({ formData, setFormData, onBack, onNext }) => {
//   const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

//   return (
//     <div>
//       <TextField
//         label="Vehicle Color"
//         name="vehicleColor"
//         value={formData.vehicleColor}
//         onChange={handleChange}
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <TextField
//         label="Vehicle Tag"
//         name="vehicleTag"
//         value={formData.vehicleTag}
//         onChange={handleChange}
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <Button variant="contained" onClick={onBack}>
//         Back
//       </Button>
//       <Button variant="contained" color="primary" onClick={onNext}>
//         Next
//       </Button>
//     </div>
//   );
// };

// export default NewOrderStep2;
