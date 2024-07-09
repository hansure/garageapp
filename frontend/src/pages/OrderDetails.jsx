import React from 'react'
import {RequestedService} from '../components/OrderDetail/RequestedService'
import { Stack, Container, Box, Divider, Button, Typography } from "@mui/material"; 
import { CardComp } from '../components/OrderDetail/CardComp'

// typeOfData, fname, email, phoneNumber, status
export const OrderDetails = () => {
  return (
    <div style={{backgroundColor:"#f0f2f0"}}>
    <Container
    maxWidth="md"
    >
      <Stack>
        <Box sx={{
          marginTop:'12px',
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between'
        }}>
          <Typography fontWeight="bold">
            Jasmine Albeshir
          </Typography>
        <Button variant='contained' sx={{maxHeight: '30px', minWidth: '30px', minHeight: '30px', borderRadius:"50px", bgcolor:'#f0bb29'}}>Inprogress</Button>
        </Box>
        <Typography>You can track the progress of your order using this page. We will constantly update this page to let you know how we are progressing.
          As soon as we are done with order, the status will turn green. That means, your car is ready for pickup
        </Typography>
      </Stack>
    <Stack direction={{xs:"column", md:'row'}} spacing={3}>
      <CardComp typeOfData="CUSTOMER" fname="Jasmin Albeshir" email="surafelmelese123@gmail.com" phoneNumber="+251968574857" status="Yes"/>
      <CardComp typeOfData="CUSTOMER" fname="Jasmin Albeshir" email="surafelmelese123@gmail.com" phoneNumber="+251968574857" status="Yes"/>
    </Stack>
    <Box spacing={1} sx={{
      bgcolor:'white',
      p:5
    }}>
    <Typography>Customer</Typography>
    <Typography fontWeight="bold">Jasmine Albeshir</Typography>
    <RequestedService/>
    <RequestedService/>
    <RequestedService/>
    <RequestedService/>
    </Box>
    <Divider sx={{ bgcolor: 'red', height:"3px" }} />
    </Container>
    </div>
  )
}
