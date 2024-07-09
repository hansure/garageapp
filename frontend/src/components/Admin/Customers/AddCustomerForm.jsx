// import React, {useState} from "react";
// import { TextField, MenuItem, Stack, Button, Select, Typography } from "@mui/material";
// import { Link } from "react-router-dom"
// import { createEmployeeService } from "../../../services/customer.service";
 
// const AddCustomerForm = () => {
//     const [customer_email, setEmail] = useState("")
//     const [customer_last_name, setLastName] = useState("")
//     const [customer_first_name, setFirstName] = useState("")
//     const [customer_phone, setPhoneNumber] = useState("")

//     //Errors
//     const [emailError, setEmailError] = useState(false);
//     const [firstNameRequired, setFirstNameRequired] = useState(false)
//     const [ passwordError, setPasswordError] = useState(false)
//     const [success, setSuccess] = useState(false)
//     const [ serverError, setServerError] = useState('')
 
//     const handleSubmit = (event) => {
//         event.preventDefault()

//         let valid = true; //Flag
 
//        // Email is required
//     if (!customer_email) {
//       setEmailError(true);
//       valid = false;
//     } else if (!customer_email.includes('@')) {
//       setEmailError(true);
//     } else {
//       const regex = /^\S+@\S+\.\S+$/;
//       if (!regex.test(customer_email)) {
//         setEmailError(true);
//         valid = false;
//       } else {
//         setEmailError(false);
//       }
//         }
//         if (!customer_password || customer_password.length < 8) {
//             setPasswordError(true)
//             valid = false
//         }else{
//             setPassword(false)
//         }
//         if(!customer_first_name){
//             setFirstNameRequired(true)
//             valid = false
//         }

//         if (!valid){
//             return;
//         }
//         const formData = {
//             customer_email,
//             customer_first_name,
//             customer_last_name,
//             customer_phone,
//             customer_password,
//             active_customer,
//             company_role_id
//         }
//         //Pass the form data to the service
//         const newcustomer = createcustomerService(formData)
//         newcustomer.then((response) => response.json())
//         .then((data) => {
//             if(data.error){
//                 setServerError(data.error)
//             } else {
//                 setSuccess(true)
//                 setServerError('')
//                 setTimeout(() => {
//                     window.location = '/'
//                 }, 2000)
//             }
//         }).catch((error) => {
//             const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//             setServerError(resMessage)
//         })
//     }
     
//     return ( 
//             <Stack sx={{
//             justifyContent:'center',
//             alignItems:'center',
//             maxWidth:'600px'
//         }}>
//         <form autoComplete="off" onSubmit={handleSubmit}>
//             <h2>Add a new customer <span color="red">___</span></h2>
//             {serverError && <Typography>{serverError}</Typography>}
//                 <TextField 
//                     label="Email"
//                     onChange={e => setEmail(e.target.value)}
//                     required
//                     variant="outlined"
//                     color="secondary"
//                     type="email"
//                     sx={{mb: 3}}
//                     fullWidth
//                     value={customer_email}
//                     error={emailError}
//                  />
//                  <TextField 
//                     label="First Name"
//                     onChange={e => setFirstName(e.target.value)}
//                     required
//                     variant="outlined"
//                     color="secondary"
//                     type="text"
//                     sx={{mb: 3}}
//                     fullWidth
//                     value={customer_first_name}
//                     error={firstNameRequired}
//                  />
//                  <TextField 
//                     label="Last Name"
//                     onChange={e => setLastName(e.target.value)}
//                     required
//                     variant="outlined"
//                     color="secondary"
//                     type="text"
//                     sx={{mb: 3}}
//                     fullWidth
//                     value={customer_last_name}
//                  />
//                  <TextField 
//                     label="customer phone number"
//                     onChange={e => setPhoneNumber(e.target.value)}
//                     required
//                     variant="outlined"
//                     color="secondary"
//                     type="text"
//                     sx={{mb: 3}}
//                     fullWidth
//                     value={customer_phone}
//                  />
//                  <Button variant="outlined" color="secondary" type="submit">customerForm</Button>
//                  {success && <Typography>{success}</Typography>}
//         </form>
//         <small>Need an account? <Link to="/">Add customer</Link></small>
//         </Stack>
//      );
// }
 
// export default AddCustomerForm;
import React, { useState } from 'react';
import { TextField, Button, Box, Stack, Typography, Container } from '@mui/material';

const AddCustomerForm = () => {
  const [customer, setCustomer] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = customer.email ? '' : 'Email is required';
    tempErrors.firstName = customer.firstName ? '' : 'First name is required';
    tempErrors.lastName = customer.lastName ? '' : 'Last name is required';
    tempErrors.phone = customer.phone ? '' : 'Phone number is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit customer data
      console.log('Customer data:', customer);
      // Reset form
      setCustomer({
        email: '',
        firstName: '',
        lastName: '',
        phone: ''
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, my: 2 }}>
        <Typography variant="h4" gutterBottom>
          Add New Customer
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
            <TextField
              label="First Name"
              name="firstName"
              value={customer.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={customer.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Customer
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddCustomerForm;
