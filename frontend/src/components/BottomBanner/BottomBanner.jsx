import * as React from 'react';
import ReactPlayer from 'react-player';
import Banner from '../../assets/images/banner/banner.jpg'
import { Container, Stack, Typography } from '@mui/material';

export default function BottomBanner() {
  return (
    <div style={{ 
      backgroundImage: `url(${Banner})` 
    }}>
        <Stack sx={{
            width: "100%",
            height: "35vh",
            marginLeft:{xs:'5vh', md:'20vh'},
            display:"flex" ,
            flexDirection:"column",
            justifyContent:"center"
        }}>
                <Typography sx={{
                color:'white'
            }}>
                Working since 1998 __
            </Typography>
            <Typography variant='h5' sx={{
                color:'white'
            }}>
                Tuneup Your Car
            </Typography>
            <Typography variant="h5" sx={{
                color:'white'
            }}>
                To Next Level
            </Typography>
            <ReactPlayer width={'10%'} height='20%' url="https://www.youtube.com/watch?v=SqcY0GlETPk&t=27s" controls={true}/>
        </Stack>
    </div>
  )
}