import {loginService } from '../services/login.service.js'
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET_KEY 
export async function loginController(req, res, next){
    try{
        console.log(req.body)
        const employeeData = req.body;
        const employee = await loginService(employeeData)
        console.log(employee)
        if(employee.status === "Fail"){
            res.status(403).json({
                status: employee.status,
                message: employee.message
            })
            console.log(employee.message)
        }
        const payload = {
            employee_id: employee.data.employee_id,
            employee_email: employee.data.employee_email,
            employee_role: employee.data.company_role_id,
            employee_first_name: employee.data.employee_first_name,
        }
        let token = jwt.sign(payload, jwtSecret, {
            expiresIn:'6h',
        });
        console.log("Token", token)
        const sendBack = {
            employee_token: token,
        }
        res.status(200).json({
            status: "success",
            message: "Employee logged in successfully",
            data: sendBack
        })
    } catch(err){

    }
}