const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'arthur',
    password: 'qrpoint',
    database: 'alura-node-api'
})

module.exports = conexao