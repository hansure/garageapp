import { Grid, Stack, Box, Container, Typography } from '@mui/material'
import React from 'react'
import GMap from '../../assets/images/GMap.png'
import email from '../../assets/images/email.png'
import addres from '../../assets/images/addres.jpg'
import phone from '../../assets/images/phone.jpg'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    ><Container maxWidth="lg">
        <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
                <Link to='https://www.google.com/maps/place/Addis+Ababa/@8.9289159,38.7053781,11.07z/data=!4m6!3m5!1s0x164b85cef5ab402d:0x8467b6b037a24d49!8m2!3d9.0191936!4d38.7524635!16zL20vMGR0dGY?entry=ttu' target="_blank">
                <Box
                    component="img"
                    sx={{
                        height: {xs:140, sm:180, md:250},
                        height:{xs:140, sm:180, md:250},
                    }}
                    src={GMap}/> 
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={5} lg={6}>
                <Stack spacing={2} sx={{
                    minWidth:340
                }}>
                    <Typography variant='h4'>Our Address</Typography>
                    <Typography >Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service</Typography>
                    <Grid item xs={12} sm={6} spacing={2}>
                        <Stack direction='row' sx={{
                            my:'5px'
                        }}>
                            <Grid item xs={2}>
                        <Box
                            component="img"
                            src={addres} sx={{
                                maxHeight: 30,
                                maxWidth: 30,
                            }}/>
                        </Grid>
                        <Grid item xs={10} px='12px'>
                            <Typography variant='h6'>Address</Typography>
                            <Typography>AA, King george st.</Typography>
                        </Grid>
                        </Stack>
                        <Stack direction='row'  sx={{
                            my:'5px'
                        }}>
                            <Grid item xs={2}>
                        <Box
                            component="img"
                            src={email} sx={{
                                maxHeight: 30,
                                maxWidth: 30,
                            }}/>
                        </Grid>
                        <Grid item xs={10} px='12px'>
                            <Typography variant='h6'>Email:</Typography>
                            <Typography>contact@gmail.com</Typography>
                        </Grid>
                        </Stack>
                        <Stack direction='row'  sx={{
                            my:'5px'
                        }}>
                            <Grid item xs={2}>
                        <Box
                            component="img"
                            src={phone} sx={{
                                maxHeight: 30,
                                maxWidth: 30,
                            }}/>
                        </Grid>
                        <Grid item xs={10} px='12px'>
                            <Typography variant='h6'>Phone</Typography>
                            <Typography>+251767418077/+251967890987</Typography>
                        </Grid>
                        </Stack>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default Address