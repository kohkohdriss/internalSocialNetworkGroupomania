-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 02 mars 2022 à 20:48
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MessageId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MessageId` (`MessageId`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `createdAt`, `updatedAt`, `MessageId`, `UserId`) VALUES
(3, 'bonne sauce ', '2022-03-02 19:18:17', '2022-03-02 19:18:17', 30, 12),
(6, 'driss commente', '2022-03-02 19:20:44', '2022-03-02 19:20:44', 30, 13),
(7, 'sauce magnifique ', '2022-03-02 19:39:03', '2022-03-02 19:39:03', 31, 1),
(8, 'sauce nouvelle', '2022-03-02 19:39:17', '2022-03-02 19:39:17', 31, 1),
(9, 'sauce bio ..', '2022-03-02 19:39:55', '2022-03-02 19:52:57', 31, 13),
(10, 'comment test ', '2022-03-02 19:56:04', '2022-03-02 19:56:04', 31, 1);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `messageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `message`, `messageUrl`, `createdAt`, `updatedAt`, `UserId`) VALUES
(30, 'new jjjmesssdsage', '', '2022-03-02 19:02:22', '2022-03-02 20:28:33', 1),
(31, 'salut tout le monde all ', 'http://127.0.0.1:3000/images/téléchargement1646249922321.jpg', '2022-03-02 19:38:42', '2022-03-02 20:24:37', 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT 'http://127.0.0.1:3000/images/avatars/default_user.jpg',
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `password`, `avatar`, `isAdmin`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Driss koko', 'administrateur@groupomania.fr', '$2b$05$2gilJqGsXWnfO56namokJuq3hFOztg4ryi6hU7QB3GZlnmVNLdzzW', 'http://127.0.0.1:3000/images/panda1646131987119.jpg', 1, 1, '2022-02-28 17:34:00', '2022-03-01 10:53:07'),
(2, 'alberto', 'alberto@gmail.com', '$2b$10$6wr3nvmAE7/uyi/tUfhgPOpz9iBXFp78g3fE2tOJIJeSLK3Fo9dL2', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-02-28 17:34:00', '2022-02-28 17:34:00'),
(3, 'adrian', 'adrian@gmail.com', '$2b$10$KMRaZn72tFMSZkJldVh0x.Tq2KoKbOyxp26KdYkbwy9IdaydI.r7y', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-01 13:39:57', '2022-03-01 13:39:57'),
(4, 'adrianun', 'azazaz@azaz.com', '$2b$10$5TBAu71ggVJaVbK/k90cg.AeMkbSwUnsaJOiqG7n/Sr0sGE70f9RO', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-01 14:36:36', '2022-03-02 20:26:41'),
(6, 'adrian', 'adrian2@gmail.com', '$2b$10$wphEpucNCfYG9rBxZHeWhORFG4V.5Dh9iFXI8mQeY/M1/9aYTUQyO', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 0, '2022-03-01 16:52:03', '2022-03-01 16:54:20'),
(7, 'aaaa', 'dmzozppo@groupomania.fr', '$2b$10$/kpOQnKppOpw.Iim6G6fJe.l6wkOBouVRIFEEixjwY9KY9Q5YKZ0O', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-01 17:01:51', '2022-03-01 17:01:51'),
(8, 'newUser', 'newUser@gmail.com', '$2b$10$p36j8g6LtI79iqepvZxhtuowGUfUBrIa208Yz757.sDxb3c2ROFK2', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-02 16:21:47', '2022-03-02 16:21:47'),
(9, 'azazaz', 'jhdjhdjbsd@gmail.com', '$2b$10$EWEUG0IUf5nTmNpYpDl3B.KzJebEQf4hn.GhMlED4d3emucPfKre.', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-02 16:23:57', '2022-03-02 16:23:57'),
(10, 'koko', 'koko@gmail.com', '$2b$10$EPW9BEaEyb6nQNF3VnkUbu0tfAkhrAffMuGFLuUIybYV2g/MeMfcu', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 0, '2022-03-02 17:26:23', '2022-03-02 17:34:17'),
(12, 'kohkoh', 'kohkoh@gmailcom', '$2b$10$dirfAu106anuHowu5Q/EeuEAb246z8By39U4lYgG08hbTzl3tGUkC', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-02 19:12:14', '2022-03-02 19:12:14'),
(13, 'driss', 'driss@gmail.com', '$2b$10$pE0KoXcZylaGePyUcLcfveIWoWW5o0CdvU7GGuYYuH46QoAUvZlYm', 'http://127.0.0.1:3000/images/avatars/default_user.jpg', 0, 1, '2022-03-02 19:20:28', '2022-03-02 19:20:28');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`MessageId`) REFERENCES `messages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
