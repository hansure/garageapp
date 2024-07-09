import { Box, Grid, Stack, Paper, Typography, styled, Button, Container } from '@mui/material';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

const Services = () => {
  return (
    <Box sx={{ backgroundColor: '#e3e3e3', py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ textAlign: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Our Services __
            </Typography>
            <Typography>
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
              going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
            </Typography>
          </Box>
        </Stack>
        <Grid container spacing={3} justifyContent="center">
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <Typography variant="body1" gutterBottom>
                  SERVICE AND REPAIRS
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Performance Upgrade
                </Typography>
                <Button variant="text" sx={{ color: 'red', mt: 2 }}>
                  READ MORE +
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;