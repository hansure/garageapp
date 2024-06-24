import express from 'express'
import sanitize from 'sanitize'
import cors from 'cors'
import 'dotenv/config'
import './config/db.config'
import router from './routes/index'

const port = process.env.PORT || 4000
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200
}

const app = express()
app.use(express.json())
app.use(sanitize.middleware)
app.use(cors(corsOptions))
app.use(router)

app.listen(port, ()=>{
    console.clear(),
    console.log(`Server running on port:${port}`)
})

export default app