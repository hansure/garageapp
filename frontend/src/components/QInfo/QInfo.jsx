import { Box, Grid, Typography, Stack , Container} from '@mui/material'
import React from 'react'
import millage from '../../assets/images/millage.jpg'

const QInfo = () => {
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
            <Grid item xs={12} sm={4} md={5} lg={6} sx={{ 
            bgcolor: "#ab0909" 
            }}>
            <Stack sx={{
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Typography variant='h4' sx={{
                color:'white',
            }}>Quality Service And Customer Satisfaction !!</Typography>
            <Typography sx={{
                color:'white',
            }}>
                We utilize the most recent symptomatic gear to ensure your vehicle is fixed
                or adjusted appropriately and in an opportune manner. We are an individual from Professional Auto Service,
                a first class execution arrange, where free assistance offices share shared objectives of being world-class car administration focuses.
            </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={5} lg={6} sx={{ bgcolor: "text.secondary" }}>
            <Box
            component="img"
            sx={{
                height: {xs:180, sm:200, md:350},
                height:{xs:180, sm:200, md:350},
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
            }}
            src={millage}/> 
        </Grid>
    </Grid>
    </Container>
    </Box>
  )
}

export default QInfo