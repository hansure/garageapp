import mysql from 'mysql2/promise'

const connectionParams = {
    user: process.env.PROCESS,
    host: process.env.Host,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const connectionPool = mysql.createPool(connectionParams)