import React from 'react'
import { Box, Stack, Typography, Grid, styled, Paper, Button } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const AdminComponent = () => {
  return (
        <div style={{
        backgroundColor:'#e3e3e3'
    }}>
        <Stack direction='column' sx={{
        justifyContent:'center',
        my:8,
        marginLeft:{xs:'2vh', md:'10vh'},
        marginRight:{xs:'1vh', md:'6vh'},
    }}>
            <Box>
                <Typography variant='h5'>
                Our Services <span style={{color:'red'}}>___</span>
            </Typography>
            <Typography sx={{
                my: 2
            }}> 
                Bring to the table win-win survival strategies to ensure roactive domination. At the end of the day,
                going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
            </Typography>
            </Box>
                <Grid container gap='2vh'>
                <Grid xs={5} sm={4} md={3} >
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            OPEN FOR ALL
                        </Typography>
                        <Typography variant='h5'>
                            All Orders
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>LIST OF ORDERs +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            OPEN FOR LEADS
                        </Typography>
                        <Typography variant='h5'>
                            New Orders
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px',
                            }}>ADD ORDERS+</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            OPEN FOR ADMINS
                        </Typography>
                        <Typography variant='h5'>
                            Employees
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>LIST OF EMPLOYEES +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>

                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            OPEN FOR ADMINS
                        </Typography>
                        <Typography variant='h5'>
                            Add Employee
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>READ MORE+</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            SERVICES AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Engine Service & Repair
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'70px',
                                h: '5px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant="body">
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Tyre & Wheels
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>

                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography variant='body'>
                            SERVICES AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Denting & Painting
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>READ MORE+</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3}>
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography>
                            SERVICES AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Engine Service & Repair
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'70px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
                <Grid xs={5} sm={4} md={3} >
                    <Item sx={{
                    minHeight:'100px'
                }}>
                        <Typography>
                            SERVICE AND REPAIRS
                        </Typography>
                        <Typography variant='h5'>
                            Tyre & Wheels
                        </Typography>
                        <Box>
                            <Button variant='text' sx={{
                                color:'red',
                                marginTop:'100px'
                            }}>READ MORE +</Button>
                        </Box>
                    </Item>
                    <Box sx={{
                        backgroundColor:'red',
                        height:'3px'
                    }}>
                    </Box>
                </Grid>
            </Grid>
    </Stack>
    </div>
  )
}

export default AdminComponent