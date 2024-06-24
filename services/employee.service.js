import {query} from '../config/db.config.js'
import bcrypt from "bcrypt";

export async function checkIfEmployeeExist(email){
    const sqlQuery = "SELECT * FROM employee WHERE employee_email = ? ";
    const rows = await query(sqlQuery, [email])
    console.log(rows)
    if(rows.length > 0){
        return true
    }
    return false
}

export async function createEmployee(newEmployee){
    let createdEmployee = {};
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newEmployee.employee_password, salt)
        const sqlQuery = "INSERT INTO employee (employee_email, active_employee) VALUES (?, ?)";
        const rows = await query(sqlQuery, [newEmployee.employee_email, newEmployee.active_employee])
        console.log(rows)
        if(rows.affectedRows !== 1){
            return false
        }
        // Get the employee id from the insert ?
        const employee_id = rows.insertId;
        //Insert the remaining daa in to the employee_info, employee_pass and employee_role tables
        const sqlQuery2 = "INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?, ?, ?, ?)"
        const rows2 = await query(sqlQuery2, [employee_id, newEmployee.employee_first_name, newEmployee.employee_last_name, newEmployee.employee_phone])
        const sqlQuery3 = "INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?)";
        const rows3 = await query(sqlQuery3, [employee_id, hashedPassword])
        const sqlQuery4 = "INSERT INTO employee_role (employee_id, company_role_id) VALUES (?, ?)"
        const rows4 = await query(sqlQuery4, [employee_id, newEmployee.company_role_id]);

        createdEmployee = {
            employee_id: employee_id,
            employee_email: newEmployee.employee_email,
            active_employee: newEmployee.active_employee,
            employee_first_name: newEmployee.employee_first_name,
            employee_last_name: newEmployee.employee_last_name,
            employee_phone: newEmployee.employee_phone
        }
    } catch(err){
        console.log(err)
    }
    return createdEmployee
}

export async function getEmployeeByEmail(employee_email){
    const sqlQuery = "SELECT * FROM employee INNER JOIN employee_info ON employee.employee_id\
    = employee_info.employee_id INNER JOIN employee_pass ON employee.employee_id = employee_pass.employee_id \
    INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id WHERE employee.employee_email = ?"
    const rows = await query(sqlQuery, [employee_email])
    return rows
}