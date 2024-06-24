//Import install service to handle communication with the database
import {installService} from '../services/install.service.js'

// Create a function to handle install tables
export async function installController(req, res, next){
    const installMessage = await installService()
    if (installMessage.status === 200){
        return res.status(200).json({message: installMessage})
    } else{
        return res.status(500).json({message: installMessage})
    }
}
