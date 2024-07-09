import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, {useContext,useEffect, useState} from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { loginEmployeeService } from '../../services/login.service.js'
import { useAuth } from "../../Contexts/AuthContext"

const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(useAuth())
    const {isLogged, setIsLogged, employee} = useAuth()
    const [employee_email, setEmail] = useState('')
    const [employee_password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [serverError, setServerError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true; //Flag
 
       // Email is required
    if (!employee_email) {
      setEmailError(true);
      valid = false;
    } else if (!employee_email.includes('@')) {
    setEmailError(true);
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(employee_email)) {
        setEmailError(true);
        valid = false;
      } else {
        setEmailError(false);
      }
    }
    if (!employee_password || employee_password.length < 8) {
        setPasswordError(true)
        valid = false
    }else{
        setPassword(false)
    }

    if (!valid){
        return;
    }
    const formData = {
            employee_email,
            employee_password
        }
        console.log("This is form data!")
        console.log(formData)
        //Pass the form data to the service
        const loginEmployee = loginEmployeeService(formData)
        console.log(loginEmployee)
        loginEmployee.then((response) => response.json())
        .then((res) => {
            if(res.status === 'success'){
                if(res.data.employee_token){
                    console.log(res.data)
                    localStorage.setItem("employee", JSON.stringify(res.data))
                    setIsLogged(true)
                }
                console.log(location)
                if(location.pathname === '/login'){
                    navigate('/')
                }else{
                    window.location.reload()
                }
            } else {
                setServerError(res.message)
            }
        }).catch((error) => {
            setServerError("An error has occured. Please try again later.")
        })

    }
  return (
        <Paper>
            <Stack direction='column' sx={{
            justifyContent:'center',
            alignItems:'center',
            minWidth:'200px',
            height:'500px',
            gap:2
        }}>
            <Typography variant='h5'>Login to your account</Typography>
            <Typography variant='body2'>Don't have an account? <Button variant='text'><Typography variant='body2'>Create a new account</Typography></Button></Typography>
            <Box component='form'
            autoComplete='off'>
            <Box
                sx={{
                    maxWidth: '100%',
                    mx:'10px'
                }}
                >{serverError && <Typography>{serverError}</Typography>}
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    id="fullWidth"
                    sx={{mb: 3}}
                    fullWidth
                    value={employee_email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    id="fullWidth"
                    value={employee_password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
            </Box>
            </Box>
            <Button variant="outlined" sx={{
                    minWidth:'191px',
                    minHeight:'46px',
                    maxWidth:'350px',
                    border:'2p solid',
                    borderRadius:'21px',
                    backgroundColor:'secondary.light'
                    }} onClick={handleSubmit}>Submit</Button>
            <Button variant='text' href='/signup'>Create an account?</Button>
        </Stack>
        </Paper>
  )
}

export default LoginForm