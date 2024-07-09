import React from 'react';
import { Button, TextField, TextareaAutosize, Container, Paper } from '@mui/material';

const ServiceForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', background: 'white' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Service Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <TextareaAutosize
            aria-label="Service Description"
            rowsMin={3}
            placeholder="Service Description"
            style={{ width: '100%', my: '10px', minHeight:'250px' }}
          />

          <Button
            type="submit"
            variant="contained"
            color="error"
            style={{ marginTop: '20px', color: 'white' }}
          >
            Add Service
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ServiceForm;
