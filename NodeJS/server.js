const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const dbAdmin = require('./database/dbAdmin');//Conexión a base de datos para el rol admin
const dbPlayer = require('./database/dbPlayer');//Conexión a base de datos para el rol player
const dbAuth = require('./database/dbAuth');//Conexión a base de datos para autentificarse
const app = express();

app.use(cors({origin: 'http://localhost:4200', credentials: true})); // Configura CORS

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//Para manejar el routing de angular con node.js

/*// Define la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Maneja todas las demás solicitudes y las redirige a tu aplicación Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});*/

//Rutas de CRUD de usuarios

// Ruta para obtener todos los usuarios con el rol de player
app.get('/users/:role', (req, res) => {
    const userRole = req.params.role;
    dbAdmin.query('SELECT id,username,email FROM users WHERE role = ?', [userRole], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Ruta para eliminar un usuario por ID
app.delete('/usersDelete/:id', (req, res) => {
  const { id } = req.params;
  dbAdmin.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
      if (err) {
          return res.status(500).json({ error: 'Error interno del servidor' });
      }
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
  });
});

// Endpoint para actualizar un usuario
app.put('/usersUpdate/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  dbAdmin.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], (error, results, fields) => {
    if (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error al actualizar usuario' });
    } else {
      console.log('Usuario actualizado');
      res.json({ message: 'Usuario actualizado correctamente' });
    }
  });
});

// Ruta para crear usuarios
app.post('/usersCreate', (req, res) => {
  const { username, email, password } = req.body;
  const role = 'player'; // Role fijo para todos los usuarios creados como admin
  const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
  dbAdmin.query(sql, [username, email, password, role], (err, result, fields) => {
    if (err) {
      res.status(500).send({ error: 'Error al crear usuario' });
      console.log(`Error al registrar usuario`);
    } else {
      res.status(200).send({ message: 'Usuario creado correctamente' });
      console.log(`Usuario creado correctamente`);
    }
  });
});

//Rutas de CRUD de Partidas

// Ruta para obtener juegos desde la base de datos
app.get('/games', (req, res) => {
  const sql = 'SELECT * FROM games'; // Se obtiene los datos de la tabla games con el nombre del jugador
  dbAdmin.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener juegos: ' + err.message);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});

// Ruta para eliminar un usuario por ID
app.delete('/gamesDelete/:id', (req, res) => {
  const { id } = req.params;
  dbAdmin.query('DELETE FROM games WHERE id = ?', [id], (err, results) => {
      if (err) {
          return res.status(500).json({ error: 'Error interno del servidor' });
      }
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Partida no encontrada' });
      }
      res.status(200).json({ message: 'Partida eliminada correctamente' });
  });
});

// Ruta para añadir una partida
app.post('/gamesCreate', (req, res) => {
  const { player, rival, points, win } = req.body;
  const newGame = { player, rival, points, win };
  dbPlayer.query('INSERT INTO games SET ?', newGame, (error, results, fields) => {
    if (error) {
      res.status(500).send('Error creando partida');
      return;
    }
    res.status(200).send('Partida creada correctamente');
  });
});

//Rutas de CRUD de Comentarios

// Ruta para obtener juegos desde la base de datos
app.get('/comments', (req, res) => {
  const sql = 'SELECT * FROM comments';
  dbAdmin.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener comentarios: ' + err.message);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results);
  });
});

// Ruta para eliminar un usuario por ID
app.delete('/commentsDelete/:id', (req, res) => {
  const { id } = req.params;
  dbAdmin.query('DELETE FROM comments WHERE id = ?', [id], (err, results) => {
      if (err) {
          return res.status(500).json({ error: 'Error interno del servidor' });
      }
      if (results.affectedRows === 0) {
          return res.status(404).json({ error: 'Comentario no encontrado' });
      }
      res.status(200).json({ message: 'Comentario eliminado correctamente' });
  });
});

//Ruta para crear comentarios
app.post('/commentsCreate', (req, res) => {
  const { player, comment_text } = req.body;
  dbPlayer.query('INSERT INTO comments (player, comment_text) VALUES (?, ?)', [player, comment_text], (error, results) => {
    if (error) throw error;
    res.send('Comment added successfully');
  });
});

//Rutas de auth

//Ruta para loguearse mediante la base de datos
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  dbAuth.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
      if (error) {
          throw error;
      }
      if (results.length > 0) {
         // Si las credenciales son correctas, genera un token JWT
         const token = jwt.sign({ username: username }, 'secreto', { expiresIn: '1h' });
        res.json({ success: true, message: 'Login exitoso', token: token });
        console.log(`Login exitoso`);
      } else {
          res.json({ success: false, message: 'Nombre de usuario o contraseña incorrectos' });
          console.log(`Nombre de usuario o contraseña incorrectos`);
      }
  });
});

// Ruta para el registro de usuarios
app.post('/registro', (req, res) => {
  const { username, email, password } = req.body;
  const role = 'player'; // Role fijo para todos los usuarios registrados
  const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
  dbAuth.query(sql, [username, email, password, role], (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error al registrar usuario' });
      console.log(`Error al registrar usuario`);
    } else {
      // Si el usuario se registra correctamente, generamos un token JWT
      const token = jwt.sign({ username, email, role }, 'clave_secreta', { expiresIn: '1h' }); // Puedes ajustar la duración del token según tus necesidades
      res.status(200).send({ message: 'Usuario registrado correctamente', token });
      console.log(`Usuario registrado correctamente`);
    }
  });
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
