//Import express router module
import {Router} from 'express';
import {employeeController} from '../controllers/employee.controller.js'

const employeeRouter = Router()

employeeRouter.post("/api/employee", employeeController)

export default employeeRouter