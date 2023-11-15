import React, { useState, useEffect, useContext} from 'react'
import { employeeAuthHeader } from "../util/auth.header"

// Create the AuthContext 
const AuthContext = React.createContext();

//export the AuthContext
export const useAuth = () => {
    return useContext(AuthContext)
}
//Create context provider
export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [employee, setEmployee] = useState(null)

    const value = {isLogged, isAdmin, setIsAdmin, setIsLogged, employee}

    useEffect(() => {
        const loggedInEmployee = employeeAuthHeader()
        loggedInEmployee.then((res) => {
            if(res.employee_token){
                setIsLogged(true)
                if(res.employee_role === 3){
                    setIsAdmin(true)
                }
                setEmployee(res)
            }
        })
        console.log(value)
    }, [])
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}