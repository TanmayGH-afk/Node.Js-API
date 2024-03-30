const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'localroot',
    database: 'new'
})

  
module.exports = mysqlPool