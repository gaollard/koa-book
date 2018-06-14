const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
  host     : config.database.mysql.host,
  user     : config.database.mysql.user,
  port     : config.database.mysql.port,
  password : config.database.mysql.password,
  database : config.database.mysql.database
});

module.exports = (sqlStr) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(error, connection){
      connection.query(sqlStr, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connection.release()
      })
    })
  })
}