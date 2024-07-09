import React from 'react';
import { Box, Typography, Button, ImageList, ImageListItem, Grid, Container } from '@mui/material';

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <ImageList cols={2} rowHeight={170}>
              <ImageListItem>
                <img
                  src='https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png'
                  alt='Image 1'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src='https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png'
                  alt='Image 2'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant='body2' gutterBottom>
              Welcome to Our Workshop
            </Typography>
            <Typography variant='h4' gutterBottom>
              Welcome to Our Workshop
            </Typography>
            <Typography paragraph>
              Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is
              on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.
              Changing the semantic element
              The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a 
              typography component is independent from the semantic underlying element.
            </Typography>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
