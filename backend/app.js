//Import sanitize to prevent XSS
import sanitize from 'sanitize'
//Importing dotenv config
import 'dotenv/config'
//Importing dotenv config
import 'dotenv/config'//Import express
import express from 'express'
import cors from 'cors'
import router from './routes/index.js'
import './config/db.config.js'
const port = process.env.PORT || 4000

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200
}

//Create webserver
const app = express()
app.use(express.json())
app.use(sanitize.middleware)
app.use(cors(corsOptions))
//create router middleware
app.use(router)
//Start webserver
app.listen(port, () => {
    console.clear()
    console.log(`Server running on port:${port}`)
})

export default app
