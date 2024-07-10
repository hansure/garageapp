import * as React from 'react';
import ReactPlayer from 'react-player';
import Banner from '../../assets/images/banner/banner.jpg';
import { Stack, Typography } from '@mui/material';

export default function TopBanner() {
  return (
    <div style={{
      backgroundImage: `url(${Banner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '35vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <Stack sx={{
        width: { xs: '90%', md: '60%' },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        bgcolor: 'rgba(0, 0, 0, 0.5)', // optional: to make text more readable
        borderRadius: 1
      }}>
        <Typography sx={{
          color: 'white',
          mb: 1
        }}>
          Working since 1998 __
        </Typography>
        <Typography variant='h5' sx={{
          color: 'white',
          mb: 1
        }}>
          Tuneup Your Car
        </Typography>
        <Typography variant="h5" sx={{
          color: 'white',
          mb: 2
        }}>
          To Next Level
        </Typography>
        <ReactPlayer width='100%' height='100%' url="https://www.youtube.com/watch?v=fPjOWekzeGI&t=66s&pp=ygUUYWJvdXQgdmVoaWNsZSBnYXJhZ2U%3D" controls={true} style={{ maxWidth: '300px', aspectRatio: '16/9' }} />
      </Stack>
    </div>
  );
}
