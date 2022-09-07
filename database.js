const mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 100000,
  multipleStatements: true
});


module.exports = { pool }