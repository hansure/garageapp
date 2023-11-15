import {createEmployee, checkIfEmployeeExist} from '../services/employee.service.js'

export async function employeeController(req, res, next){
    const employeeExists = await checkIfEmployeeExist(req.body.employee_email)
    if(employeeExists){
        res.status(400).json({
            error:"This email address is already associated with another employee"
        })
    } else{
        try{
            let newEmployee = req.body;
            const employee = await createEmployee(newEmployee)
            if(!employee){
                res.status(400).json({
                    error:"Failed to add the employee!"
                })
            }else{
                res.status(200).json({
                    status:"true",
                })
            }
    }
    catch(error){
    res.status(400).json({
            error:"Something went wrong"
        })
    }
}
}