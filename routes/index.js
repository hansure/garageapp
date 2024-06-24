//Import express router module
import {Router} from 'express';
import installRouter from './install.routes.js'
import employeeRouter from './employee.routes.js';
import loginRouter from './login.routes.js';
const router = Router()

router.use(installRouter)
router.use(employeeRouter)
router.use(loginRouter)

//Export the routes
export default router;