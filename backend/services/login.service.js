import {query} from '../config/db.config.js'
import bcrypt from 'bcrypt'
import {getEmployeeByEmail} from './employee.service.js'

export async function loginService(employeeData){
  try {
    let returnData = {}
    const employee = await getEmployeeByEmail(employeeData.employee_email)
    if(employee.length === 0){
      returnData = {
        status: 'Fail',
        message: "Employee does not exist"
      }
      return returnData
    }
      // compare password with hashed password in database
      const passwordMatch = await bcrypt.compare(employeeData.employee_password, employee[0].employee_password_hashed)
      if(!passwordMatch){
        returnData = {
              status: 'Fail',
              message: "Password is incorrect."
          }
          return returnData
      }
      returnData = {
            status: 'Success',
            data: employee[0]
            }
            return returnData
  } catch (error) {
    console.log(error)
  }
}