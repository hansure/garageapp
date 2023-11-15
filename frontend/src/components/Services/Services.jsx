import { Box, Grid, Stack, Paper, Typography, styled, Button } from '@mui/material'
import React from 'react'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Services = () => {
  return (
    <div style={{
        backgroundColor:'#e3e3e3'
    }}>
        <Stack direction='column' sx={{
        justifyContent:'center',
        my:8,
        marginLeft:{xs:'4vh', md:'30vh'},
        marginRight:{xs:'2vh', md:'8vh'},
    }}>
            <Box>
                <Typography variant='h5'>
                Our Services __
            </Typography>
            <Typography> 
                Bring to the table win-win survival strategies to ensure roactive domination. At the end of the day,
                going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
            </Typography>
            </Box>
                <Grid container gap='2vh'>
                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>

                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Performance Upgrade
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'30px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
    </Stack>
    </div>
  )
}

export default Services