import { Box, Grid, Typography, Stack, Container } from '@mui/material';
import React from 'react';
import millage from '../../assets/images/millage.jpg';

const QInfo = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#ab0909",
                padding: 4,
                borderRadius: 2,
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Quality Service And Customer Satisfaction!!
              </Typography>
              <Typography>
                We utilize the most recent diagnostic equipment to ensure your vehicle is fixed
                or serviced properly and in a timely manner. We are a member of Professional Auto Service,
                a top-tier performance network, where independent service facilities share common goals of being world-class automotive service centers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={millage}
              alt="Quality Service"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QInfo;