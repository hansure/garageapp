export const employeeAuthHeader = async () => {
    const employee = await JSON.parse(localStorage.getItem('employee'))
    if(employee && employee.employee_token){
        const decodedToken = await decodedTokenPayload(employee.employee_token)
        console.log(decodedToken)
        employee.employee_role = decodedToken.employee_role;
        employee.employee_id = decodedToken.employee_id
        employee.employee_email = decodedToken.employee_email
        employee.employee_first_name = decodedToken.employee_first_name
        
        return employee
    }else{
        return {}
    }
}

export const decodedTokenPayload = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64).split('').map((res) => `%${`00${res.charCodeAt(0).toString(16)}`.slice(-2)}`).join('')
    )
    return JSON.parse(jsonPayload)
}