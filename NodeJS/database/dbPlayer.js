const mysql = require('mysql');

//cadena de conexion a la BD
const dbPlayer = mysql.createConnection({
    host: 'localhost',//servidor de BBDD
    database: 'twilight_struggle',
    user: 'kennedy',//usuario con los minimos privilegios posibles
    password: 'kennedy123'
});

// Conectar a la base de datos
dbPlayer.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports = dbPlayer;