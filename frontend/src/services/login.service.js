const api_url = process.env.REACT_APP_API_URL
export const loginEmployeeService = async (formData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    }
    const response = await fetch("https://garageapp-cp16.onrender.com/api/employee/login", requestOptions)
    return response
}
export const logOutEmployeeService = async () => {
    localStorage.removeItem("employee")
}