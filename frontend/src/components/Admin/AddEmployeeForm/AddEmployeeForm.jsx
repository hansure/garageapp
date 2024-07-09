import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Stack,
  Button,
  Select,
  Typography,
  Container,
  Paper,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { createEmployeeService } from "../../../services/employee.service";

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    active: 1,
    role: 1,
  });

  const [errors, setErrors] = useState({
    email: false,
    firstName: false,
    password: false,
  });

  const [feedback, setFeedback] = useState({
    success: false,
    serverError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    setErrors({ ...errors, [name]: false });
    setFeedback({ ...feedback, success: false, serverError: "" });
  };

  const validate = () => {
    let valid = true;
    let tempErrors = { ...errors };

    if (!employee.email || !/^\S+@\S+\.\S+$/.test(employee.email)) {
      tempErrors.email = true;
      valid = false;
    }

    if (!employee.firstName) {
      tempErrors.firstName = true;
      valid = false;
    }

    if (!employee.password || employee.password.length < 8) {
      tempErrors.password = true;
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await createEmployeeService(employee);
      const data = await response.json();

      if (data.error) {
        setFeedback({ ...feedback, serverError: data.error });
      } else {
        setFeedback({ success: true, serverError: "" });
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      }
    } catch (error) {
      setFeedback({
        ...feedback,
        serverError:
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString(),
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={2} sx={{ padding: 1, marginTop: 1, marginBottom: 1 }}>
        <Typography variant="h4" gutterBottom align="center">
          Add New Employee
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {feedback.serverError && (
            <Typography color="error" align="center" gutterBottom>
              {feedback.serverError}
            </Typography>
          )}
          <Stack spacing={3}>
            <TextField
              label="Email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? "Enter a valid email" : ""}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="First Name"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              error={errors.firstName}
              helperText={errors.firstName ? "First name is required" : ""}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <Select
              name="role"
              value={employee.role}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            >
              <MenuItem value={1}>Employee</MenuItem>
              <MenuItem value={2}>Manager</MenuItem>
              <MenuItem value={3}>Admin</MenuItem>
            </Select>
            <TextField
              label="Password"
              name="password"
              value={employee.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password ? "Password must be at least 8 characters" : ""}
              type="password"
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Add Employee
            </Button>
            {feedback.success && (
              <Typography color="success" align="center">
                Employee added successfully!
              </Typography>
            )}
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default AddEmployeeForm;
