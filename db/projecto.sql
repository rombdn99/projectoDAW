-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-05-2020 a las 17:17:31
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `projecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deporte`
--

DROP TABLE IF EXISTS `deporte`;
CREATE TABLE IF NOT EXISTS `deporte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipamiento`
--

DROP TABLE IF EXISTS `equipamiento`;
CREATE TABLE IF NOT EXISTS `equipamiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

DROP TABLE IF EXISTS `genero`;
CREATE TABLE IF NOT EXISTS `genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genero` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` double NOT NULL,
  `info_tecnica` varchar(255) NOT NULL,
  `deporte` int(11) NOT NULL,
  `genero` int(11) NOT NULL,
  `ropa` int(11) NOT NULL,
  `equipamiento` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ropa`
--

DROP TABLE IF EXISTS `ropa`;
CREATE TABLE IF NOT EXISTS `ropa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `tipo` int(11) NOT NULL DEFAULT 0,
  `contra` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nombre`, `apellido`, `telefono`, `direccion`, `tipo`, `contra`) VALUES
(1, 'admin@gmail.com', 'admin', 'admin', '987654321', 'direcccion', 1, '?2y?10?dhRvQRmncL1Go/LXNXfrU.DLCk/ktl.vhEwhHESx.XMW1dY0pd3R2'),
(2, 'aa@gmail.com', 'Aaaa', 'Aaa', '987654321', 'asdffa', 0, '$2y$10.IKdLlGh9JuzCVvQ494insyHy6RlMyea'),
(4, 'aa3@gmail.com', 'Aaaa', 'Aaa', '987654321', 'asdffa', 0, '$2y$10$75rOmZ828xJmW2WnhhCKgOHd8PFwHE5b1pki3V4f8ceTNb/Vh7TI.'),
(7, 'aa4@gmail.com', 'Aaaa', 'Aaa', '987654321', 'asdffa', 0, '?2y?10?u6iNtlpAOx/M6/dqviK6lOrGFlTCPLdBavERkcSkKSUm8BQLidgHy'),
(14, 'raul41999@gmail.com', 'Raul', 'Osuna', '987654321', 'Direccion', 0, '?2y?10?nqH12MwHDieS9DfXVQz1peleEFB7w28YI.6eztieNoLP.LQRgm7qW'),
(9, 'aa5@gmail.com', 'Aaaa', 'Aaa', '987654321', 'asdffa', 0, '?2y?10?lTD6./FX6xo/xes.N/NnI.csnKgQdk4NTCJY7UWjmuemcMRtaY1wi'),
(13, 'aa8@gmail.com', 'Aaa', 'Aaa', '987654321', 'aaaa', 0, '?2y?10?Vm8NOyV6LAVRH7/oXP7.J.L7wkPU4IZ5df5LueM55SnGOvNAmIdR2'),
(11, 'aa6@gmail.com', 'Aaaa', 'Aaaa', '987654321', 'sdafdfa dsfafa', 0, '?2y?10?LSVnXREk76xUzK13IuiLOu6tedsBLqhnl0vYHVdRh24TtW8Rz8MLy'),
(12, 'aa7@gmail.com', 'Aaaa', 'Aaaa', '987654321', 'sdafdfa dsfafa', 0, '?2y?10?G37uh5wdhbi3ixHCh4Rm3OU9kw/r1a5cpci4WOmKYvPAx1hkHdpiy');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
