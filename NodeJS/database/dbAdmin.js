const mysql = require('mysql');

//cadena de conexion a la BD
const dbAdmin = mysql.createConnection({
    host: 'localhost',//servidor de BBDD
    database: 'twilight_struggle',
    user: 'churchill',//usuario con los minimos privilegios posibles
    password: 'churchill123'
});

// Conectar a la base de datos
dbAdmin.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports = dbAdmin;