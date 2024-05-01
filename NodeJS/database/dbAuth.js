const mysql = require('mysql');

//cadena de conexion a la BD
const dbAuth = mysql.createConnection({
    host: 'localhost',//servidor de BBDD
    database: 'twilight_struggle',
    user: 'stalin',//usuario con los minimos privilegios posibles
    password: 'stalin123'
});

// Conectar a la base de datos
dbAuth.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports = dbAuth;