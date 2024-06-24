//Import express router module
import {Router} from 'express';

const installRouter = Router()
//import install controller
import {installController} from '../controllers/install.controller.js'
installRouter.get('/install', installController)

export default installRouter