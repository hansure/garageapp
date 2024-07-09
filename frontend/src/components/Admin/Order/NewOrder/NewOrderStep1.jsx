import React from 'react';
import { TextField, Box, Container, Grid, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  borderRadius: '8px',
  backgroundColor: '#ff0000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
  fontSize: '14px',
  fontWeight: 'bold',
}));

const ResponsiveSearchField = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(1),
  backgroundColor: '#fff',
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
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

const NewOrderStep1 = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <ResponsiveSearchField
            variant="outlined"
            placeholder="Search..."
            value={formData.Email}
            onChange={handleChange}
            name="Email"
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
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="start">
          <CustomButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onNext}
          >
            Add New Customer
          </CustomButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewOrderStep1;