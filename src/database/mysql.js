const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '39.108.138.156',
  user: 'root',
  password: 'gaoxiong123.',
  database: 'mall',
  port: 3306
})

console.log(connection);

connection.query('SELECT * FROM mall_product', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});