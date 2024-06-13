const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createConnection(
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_DATABASE,
        port:process.env.DB_PORT,
        keepAliveInitialDelay: 10000, // 0 by default.
        enableKeepAlive: true // false by default.
    }
)

pool.connect((error)=>{
    if(error){
        console.log('fatal conection'+ error)
    }else{
        console.log('db okidoki')
    }
})

module.exports = pool;