const api_url = process.env.REACT_APP_API_URL
export const createEmployeeService = async (formData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    }
    const response = await fetch(`${api_url}/api/employee`, requestOptions)
    return response
}