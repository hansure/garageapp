import React from 'react'
import { Stack, Box, Typography, Button, ImageList, ImageListItem, Grid, Container} from '@mui/material'

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
        <Grid item xs={10} sm={4}>
            <ImageList 
                    cols={3} rowHeight={170}>
                <ImageListItem>
                    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png'/>
                </ImageListItem>
                
                <ImageListItem>
                    <img src='https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png'/>
                </ImageListItem>
            </ImageList>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
            <Typography variant='body2'>Welcome to Our workshop</Typography>
            <Typography variant='h4'>Welcome to Our workshop</Typography>
            <Typography>
                Bring to the table win-win survival strategie to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is
                on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

                Changing the semantic element

                The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a 
                typography component is independent from the semantic underlying element.
            </Typography>
            <Button variant="contained" color="secondary">Secondary</Button>
        </Grid>
    </Grid>
    </Container>
    </Box>
  )
}

export default Experience