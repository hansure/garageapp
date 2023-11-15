import React, {useState} from "react";
import { TextField, MenuItem, Stack, Button, Select, Typography } from "@mui/material";
import { Link } from "react-router-dom"
import { createEmployeeService } from "../../../services/employee.service";
 
const AddEmployeeForm = () => {
    const [employee_email, setEmail] = useState("")
    const [employee_last_name, setLastName] = useState("")
    const [employee_first_name, setFirstName] = useState("")
    const [employee_phone, setPhoneNumber] = useState("")
    const [active_employee, setActive_employee] = useState(1)
    const [company_role_id, setCompany_role_id] = useState(1) 
    const [employee_password, setPassword] = useState("")

    //Errors
    const [emailError, setEmailError] = useState(false);
    const [firstNameRequired, setFirstNameRequired] = useState(false)
    const [ passwordError, setPasswordError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [ serverError, setServerError] = useState('')
 
    const handleSubmit = (event) => {
        event.preventDefault()

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
        if(!employee_first_name){
            setFirstNameRequired(true)
            valid = false
        }

        if (!valid){
            return;
        }
        const formData = {
            employee_email,
            employee_first_name,
            employee_last_name,
            employee_phone,
            employee_password,
            active_employee,
            company_role_id
        }
        //Pass the form data to the service
        const newEmployee = createEmployeeService(formData)
        newEmployee.then((response) => response.json())
        .then((data) => {
            if(data.error){
                setServerError(data.error)
            } else {
                setSuccess(true)
                setServerError('')
                setTimeout(() => {
                    window.location = '/'
                }, 2000)
            }
        }).catch((error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            setServerError(resMessage)
        })
    }
     
    return ( 
            <Stack sx={{
            justifyContent:'center',
            alignItems:'center',
            maxWidth:'600px'
        }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>EmployeForm Form</h2>
            {serverError && <Typography>{serverError}</Typography>}
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={employee_email}
                    error={emailError}
                 />
                 <TextField 
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={employee_first_name}
                    error={firstNameRequired}
                 />
                 <TextField 
                    label="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={employee_last_name}
                 />
                 <TextField 
                    label="Employee phone number"
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={employee_phone}
                 />
                <Select name="employee_role" value={company_role_id} onChange={event => setCompany_role_id(event.target.value)} fullWidth sx={{mb: 3}} required>
                        <MenuItem value={1} defaultValue>Employee</MenuItem>
                        <MenuItem value={2}>Manager</MenuItem>
                        <MenuItem value={3}>Admin</MenuItem>
                </Select>
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={employee_password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">EmployeeForm</Button>
                 {success && <Typography>{success}</Typography>}
        </form>
        <small>Need an account? <Link to="/">Add Employee</Link></small>
        </Stack>
     );
}
 
export default AddEmployeeForm;