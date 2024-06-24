//Import express router module
import {Router} from 'express';
import {loginController} from '../controllers/login.controller.js'

const loginRouter = Router()

loginRouter.post("/api/employee/login", loginController)

export default loginRouter