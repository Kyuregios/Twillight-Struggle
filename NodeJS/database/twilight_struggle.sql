-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2024 a las 12:16:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `twilight_struggle`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `player` varchar(255) DEFAULT NULL,
  `comment_text` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `player`, `comment_text`) VALUES
(1, 'Nacho', 'Perdí por no gestionar el sudeste asiático'),
(2, 'Jose', 'Victoria fácil para la URSS gracias a controlar todo el sudeste asiático');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `player` varchar(255) NOT NULL,
  `rival` varchar(255) NOT NULL,
  `points` int(11) DEFAULT NULL,
  `win` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `player`, `rival`, `points`, `win`) VALUES
(1, 'Nacho', 'Jose', 250, 0),
(2, 'Jose', 'Nacho', 350, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'Admin', 'admin@gmail.com', 'RedPh@ne', 'admin'),
(2, 'Jose', 'jose@gmail.com', 'J@se123', 'player'),
(3, 'Wintop', 'wintop@gmail.com', 'Wint@p123', 'player'),
(4, 'Joel', 'joel@gmail.com', 'J@el123', 'player'),
(5, 'David', 'david@gmail.com', 'David123', 'player'),
(6, 'Marc', 'marc@gmail.com', 'Marc123', 'player'),
(7, 'Roger', 'roger@gmail.com', 'R@ger123', 'player'),
(8, 'Adrian', 'adrian@gmail.com', 'adrian123', 'player'),
(9, 'Nacho', 'nacho@gmail.com', 'Nach@123', 'player'),
(10, 'Miryam', 'miryam@gmail.com', 'Miryam123', 'player'),
(15, 'Cris', 'cris@gmail.com', 'Cris123', 'player'),
(16, 'Fran', 'fran@gmail.com', 'Fran123', 'player');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
