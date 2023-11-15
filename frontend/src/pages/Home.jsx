import React from 'react'
import TopBanner from '../components/TopBanner/TopBanner'
import BottomBanner from '../components/BottomBanner/BottomBanner'
import Experience from '../components/Experience/Experience'
import { Stack } from '@mui/material'
import Services from '../components/Services/Services'
import QInfo from '../components/QInfo/QInfo'
import YchooseUs from '../components/YchooseUs/YchooseUs'
import ScheduleAdvert from '../components/ScheduleAdvert/ScheduleAdvert'

const Home = () => {
  return (
    <Stack>
    <TopBanner/>
    <Experience/>
    <Services/>
    <QInfo/>
    <YchooseUs/>
    <BottomBanner/>
    <ScheduleAdvert/>
    </Stack>
  )
}

export default Home