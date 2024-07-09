import React from 'react'
import { Stack, Typography, Box, Grid, Container } from '@mui/material'
import ServiceCard from '../../components/Admin/Services/ServiceCard'
import ServiceForm from '../../components/Admin/Services/ServiceForm'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'

const ServiceManage = () => {

    const handleEdit = (event) => {
        event.preventDefault()
    }

    const handleDelete = (event) => {
        event.preventDefault()
    }
    // direction='row' spacing={{xs:2, sm: 5, md:8}} sx={{
    //   bgcolor:'#bbbcbd'
    // }}
  return (
    <Grid container spacing={2} sx={{
        bgcolor:'#bbbcbd',
        m:1
    }}>
        <AdminMenu/>
        <Grid item xs={12} sm={8}>
        <div style={{backgroundColor:'white'}}>
            <Container maxWidth="md">
                <Typography fontWeight="bold" variant="h4" sx={{
                    my:2
                }}>Services we provide <span style={{color: "red"}}>___</span></Typography>
                <Typography sx={{
                    marginBottom:2
                }}>
                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                    going forward, an new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                </Typography>
            </Container>
        <ServiceCard
        serviceName="Your Service Name"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ServiceCard
        serviceName="Your Service Name"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ServiceCard
        serviceName="Your Service Name"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ServiceCard
        serviceName="Your Service Name"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ServiceCard
        serviceName="Your Service Name"
        serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
        <ServiceForm/>
    </div>
      </Grid>
    </Grid>
  )
}

export default ServiceManage