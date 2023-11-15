const api_url = process.env.REACT_APP_API_URL
export const loginEmployeeService = async (formData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    }
    const response = await fetch(`${api_url}/api/employee/login`, requestOptions)
    return response
}