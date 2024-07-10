import React from 'react';
import ReactPlayer from 'react-player';
import Ba from '../../assets/images/banner/Ba.png';
import { Box, Container, Stack, Typography } from '@mui/material';

const BottomBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Ba})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '35vh', // Ensures minimum height for the banner
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: 4, // Adjust padding on Y-axis
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{
            color: 'white',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          spacing={2} // Adjust spacing between elements
        >
          <Typography variant="subtitle1">Working since 1998 __</Typography>
          <Typography variant="h4">Tuneup Your Car</Typography>
          <Typography variant="h4">To the Next Level</Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: 600, // Adjust max width for better responsiveness
              height: 'auto',
              marginTop: 2, // Add spacing between text and video
            }}
          >
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=SqcY0GlETPk&t=27s"
              controls={true}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BottomBanner;
