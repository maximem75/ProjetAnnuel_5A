-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 05 Septembre 2017 à 17:41
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `hotel`
--

-- --------------------------------------------------------

--
-- Suppression des tables
--

DROP TABLE IF EXISTS picture_galery;

DROP TABLE IF EXISTS festive_room_booking_services;
DROP TABLE IF EXISTS festive_room_booking;

DROP TABLE IF EXISTS room_booking_services;
DROP TABLE IF EXISTS room_booking;

DROP TABLE IF EXISTS restaurant_table_booking;
DROP TABLE IF EXISTS restaurant_table;

DROP TABLE IF EXISTS invalid_booking_date_festive_room;
DROP TABLE IF EXISTS invalid_booking_date_room;

DROP TABLE IF EXISTS news_letter;
DROP TABLE IF EXISTS room;
DROP TABLE IF EXISTS picture_room_category;
DROP TABLE IF EXISTS room_category;

DROP TABLE IF EXISTS festive_room_service;
DROP TABLE IF EXISTS room_service;

DROP TABLE IF EXISTS festive_room;
DROP TABLE IF EXISTS building;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS client;

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id_article` int(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `date` datetime NOT NULL,
  `picture_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `building`
--

CREATE TABLE `building` (
  `id_building` int(100) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `building`
--

INSERT INTO `building` (`id_building`, `name`) VALUES
(1, 'Batiment A'),
(2, 'Batiment B'),
(3, 'Batiment C');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id_client` int(100) NOT NULL,
  `accreditation` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `status_actif` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `token_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id_client`, `accreditation`, `address`, `birthday`, `city`, `code`, `country`, `email`, `firstname`, `lastname`, `password`, `phone`, `postal_code`, `sexe`, `status_actif`, `token`, `token_date`) VALUES
(1, 'user', 'test', '2017-07-04 00:00:00', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'active', '', NULL),
(2, 'user', 'test', '2017-07-04 00:00:00', 'test', 'test', 'test', 'testnn', 'test', 'test', 'test', 'test', 'test', 'test', 'active', '', NULL),
(3, 'user', 'test', '2017-07-04 00:00:00', 'test', 'test', 'test', 'testnnn', 'test', 'test', 'test', 'test', 'test', 'test', 'active', '', NULL),
(4, 'user', 'test', '2017-07-04 00:00:00', 'test', 'test', 'test', 'testnnnn', 'test', 'test', 'test', 'test', 'test', 'test', 'active', '', NULL),
(5, 'user', '70 rue toto', '1993-09-15 02:00:00', 'Paris', 'OK', 'france', 'mollard.maxime@hotmail.fr', 'maxime', 'mollard', 'c4be2e05-762d-495c-9894-4c0c4248a367', '0105050505', '75015', 'H', 'active', 'c4be2e05-762d-495c-9894-4c0c4248a367', '2017-08-17 18:11:26'),
(6, 'user', '70 rue toto', '1991-09-15 02:00:00', 'Paris', '7495', 'france', 'mollard.nicolas@hotmail.fr', 'nicolas', 'mollard', 'f2d81a260dea8a100dd517984e53c56a7523d96942a834b9cdc249bd4e8c7aa9', '0105050505', '75015', 'H', 'inactive', NULL, NULL),
(7, 'user', '70 rue toto', '1991-09-15 02:00:00', 'Paris', '4991', 'france', 'mollard.marion@hotmail.fr', 'marion', 'mollard', 'f2d81a260dea8a100dd517984e53c56a7523d96942a834b9cdc249bd4e8c7aa9', '0105050505', '75015', 'H', 'inactive', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `festive_room`
--

CREATE TABLE `festive_room` (
  `id_festive_room` int(100) NOT NULL,
  `price` float(100,4) NOT NULL,
  `picture_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `festive_room_booking`
--

CREATE TABLE `festive_room_booking` (
  `id_festive_room_booking` int(100) NOT NULL,
  `date_book` datetime NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `id_festive_room` int(100) NOT NULL,
  `id_client` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `festive_room_booking_services`
--

CREATE TABLE `festive_room_booking_services` (
  `id_festive_room_booking_services` int(100) NOT NULL,
  `id_festive_room_booking` int(100) NOT NULL,
  `id_festive_room_service` int(100) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `festive_room_service`
--

CREATE TABLE `festive_room_service` (
  `id_festive_room_service` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float(100,4) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `invalid_booking_date_room`
--

CREATE TABLE `invalid_booking_date_room` (
  `id_invalid_booking_date_room` int(100) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `id_room` int(100) NOT NULL  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `invalid_booking_date_festive_room`
--

CREATE TABLE `invalid_booking_date_festive_room` (
  `id_invalid_booking_date_festive_room` int(100) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `id_festive_room` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `news_letter`
--

CREATE TABLE `news_letter` (
  `id_news_letter` int(100) NOT NULL,
  `content` longtext NOT NULL,
  `reason` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------


--
-- Structure de la table `news_letter`
--

CREATE TABLE `picture_galery` (
  `id_picture_galery` int(100) NOT NULL,
  `path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `news_letter`
--

CREATE TABLE `picture_room_category` (
  `id_picture_room_category` int(100) NOT NULL,
  `id_room_category` int(100) NOT NULL,
  `path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `restaurant_table`
--

CREATE TABLE `restaurant_table` (
  `id_restaurant_table` int(100) NOT NULL,
  `number` varchar(255) NOT NULL,
  `number_chairs` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `restaurant_table`
--

INSERT INTO `restaurant_table` (`id_restaurant_table`, `number`, `number_chairs`) VALUES
(1, '1', 4),
(2, '2', 4),
(3, '10', 4),
(5, '11', 4);

-- --------------------------------------------------------

--
-- Structure de la table `restaurant_table_booking`
--

CREATE TABLE `restaurant_table_booking` (
  `id_restaurant_table_booking` int(100) NOT NULL,
  `booking_date` datetime NOT NULL,
  `date` datetime NOT NULL,
  `number` int(10) NOT NULL,
  `id_client` int(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `room`
--

CREATE TABLE `room` (
  `id_room` int(100) NOT NULL,
  `number` varchar(25) NOT NULL,
  `id_room_category` int(100) NOT NULL,
  `id_building` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `room`
--

INSERT INTO `room` (`id_room`, `number`, `id_room_category`, `id_building`) VALUES
(144, '1', 1, 1),
(145, '2', 1, 1),
(146, '3', 1, 1),
(147, '4', 1, 1),
(148, '5', 1, 1),
(149, '6', 1, 1),
(150, '7', 1, 1),
(151, '8', 1, 1),
(153, '1', 1, 2),
(154, '2', 1, 2),
(155, '3', 1, 2),
(156, '4', 1, 2),
(157, '5', 1, 2),
(158, '6', 1, 2),
(159, '7', 1, 2),
(160, '8', 1, 2),
(161, '9', 2, 1),
(162, '10', 2, 1),
(163, '11', 2, 1),
(164, '12', 2, 1),
(165, '9', 2, 2),
(166, '10', 2, 2),
(167, '11', 2, 2),
(168, '12', 2, 2),
(169, '13', 3, 1),
(170, '14', 3, 1),
(171, '13', 3, 2),
(172, '14', 3, 2),
(173, '1', 4, 3),
(174, '2', 4, 3),
(175, '3', 4, 3),
(176, '4', 4, 3);

-- --------------------------------------------------------

--
-- Structure de la table `room_booking`
--

CREATE TABLE `room_booking` (
  `id_room_booking` int(100) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `date_book` datetime NOT NULL,
  `id_client` int(100) NOT NULL,
  `id_room` int(100) NOT NULL,
  `id_room_category` int(100) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `ref_room_book` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `room_booking`
--

INSERT INTO `room_booking` (`id_room_booking`, `date_start`, `date_end`, `date_book`, `id_client`, `id_room`, `id_room_category`, `reason`, `status`, `ref_room_book`) VALUES
(770, '2017-11-16 01:00:00', '2017-11-18 01:00:00', '2017-08-17 18:07:17', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_0'),
(771, '2017-11-16 01:00:00', '2017-11-18 01:00:00', '2017-08-17 18:07:17', 5, 171, 3, 'vacances', 'inactive', 'room_booking_5_1'),
(772, '2017-11-16 01:00:00', '2017-11-18 01:00:00', '2017-08-17 18:07:18', 5, 169, 3, 'vacances', 'inactive', 'room_booking_5_2'),
(773, '2017-11-16 01:00:00', '2017-11-18 01:00:00', '2017-08-17 18:07:18', 5, 170, 3, 'vacances', 'inactive', 'room_booking_5_3'),
(774, '2017-11-19 01:00:00', '2017-11-20 01:00:00', '2017-08-17 18:07:35', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_4'),
(775, '2017-11-19 01:00:00', '2017-11-20 01:00:00', '2017-08-17 18:07:36', 5, 171, 3, 'vacances', 'inactive', 'room_booking_5_5'),
(776, '2017-11-19 01:00:00', '2017-11-20 01:00:00', '2017-08-17 18:07:37', 5, 169, 3, 'vacances', 'inactive', 'room_booking_5_6'),
(777, '2017-11-19 01:00:00', '2017-11-20 01:00:00', '2017-08-17 18:07:37', 5, 170, 3, 'vacances', 'inactive', 'room_booking_5_7'),
(778, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:48', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_8'),
(779, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:49', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_9'),
(780, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:49', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_10'),
(781, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:49', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_11'),
(782, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:49', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_12'),
(783, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:50', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_13'),
(784, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:50', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_14'),
(785, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_15'),
(786, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_16'),
(787, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_17'),
(788, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_18'),
(789, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_19'),
(790, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:51', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_20'),
(791, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:52', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_21'),
(792, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:52', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_22'),
(793, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:52', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_23'),
(794, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:52', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_24'),
(795, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:53', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_25'),
(796, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:53', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_26'),
(797, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:53', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_27'),
(798, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:54', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_28'),
(799, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:54', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_29'),
(800, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:55', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_30'),
(801, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:55', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_31'),
(802, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:55', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_32'),
(803, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:07:55', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_33'),
(804, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:10:08', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_34'),
(805, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:11:00', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_35'),
(806, '2017-11-20 01:00:00', '2017-11-22 01:00:00', '2017-08-17 18:11:26', 5, 172, 3, 'vacances', 'inactive', 'room_booking_5_36');

-- --------------------------------------------------------

--
-- Structure de la table `room_booking_services`
--

CREATE TABLE `room_booking_services` (
  `id_room_booking_services` int(100) NOT NULL,
  `id_room_booking` int(100) NOT NULL,
  `id_room_service` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `room_service`
--

CREATE TABLE `room_service` (
  `id_room_service` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float(100,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `room_category`
--

CREATE TABLE `room_category` (
  `id_room_category` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float(100,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `room_category`
--

INSERT INTO `room_category` (`id_room_category`, `name`, `price`) VALUES
(1, 'Chambre Simple', 60000),
(2, 'Chambre Double', 120000),
(3, 'Suite Junior', 150000),
(4, 'Suite executive', 200000);

-- --------------------------------------------------------

--
-- Index pour les tables exportées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`);

--
-- Index pour la table `building`
--
ALTER TABLE `building`
  ADD PRIMARY KEY (`id_building`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `UK_bfgjs3fem0hmjhvih80158x29` (`email`);

--
-- Index pour la table `festive_room`
--
ALTER TABLE `festive_room`
  ADD PRIMARY KEY (`id_festive_room`);

--
-- Index pour la table `festive_room_booking`
--
ALTER TABLE `festive_room_booking`
  ADD PRIMARY KEY (`id_festive_room_booking`),
  ADD KEY `FK_FestiveRoomBookingIdFestiveRoom` (`id_festive_room`),
  ADD KEY `FK_FestiveRoomBookingIdClient` (`id_client`);

--
-- Index pour la table `festive_room_booking_services`
--
ALTER TABLE `festive_room_booking_services`
  ADD PRIMARY KEY (`id_festive_room_booking_services`),
  ADD KEY `FK_FrbsFestiveRoomBooking` (`id_festive_room_booking`),
  ADD KEY `FK_FrbsService` (`id_festive_room_service`);

--
-- Index pour la table `festive_room_service`
--
ALTER TABLE `festive_room_service`
  ADD PRIMARY KEY (`id_festive_room_service`);

--
-- Index pour la table `invalid_booking_date_room`
--
ALTER TABLE `invalid_booking_date_room`
  ADD PRIMARY KEY (`id_invalid_booking_date_room`),
  ADD KEY `FK_InvalidBookingDateRoomRoom` (`id_room`);

--
-- Index pour la table `invalid_booking_date_festive_room`
--
ALTER TABLE `invalid_booking_date_festive_room`
  ADD PRIMARY KEY (`id_invalid_booking_date_festive_room`),
  ADD KEY `FK_InvalidBookingDateFestiveRoomFestiveRoom` (`id_festive_room`);

--
-- Index pour la table `news_letter`
--
ALTER TABLE `news_letter`
  ADD PRIMARY KEY (`id_news_letter`);

--
-- Index pour la table `picture_galery`
--
ALTER TABLE `picture_galery`
  ADD PRIMARY KEY (`id_picture_galery`);

--
-- Index pour la table `picture_room_category`
--
ALTER TABLE `picture_room_category`
  ADD PRIMARY KEY (`id_picture_room_category`),
  ADD KEY `FK_PRCidRoomCategory` (`id_room_category`);

--
-- Index pour la table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  ADD PRIMARY KEY (`id_restaurant_table`);

--
-- Index pour la table `restaurant_table_booking`
--
ALTER TABLE `restaurant_table_booking`
  ADD PRIMARY KEY (`id_restaurant_table_booking`),
  ADD KEY `FK_RestaurantTableBookingClient` (`id_client`);

--
-- Index pour la table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id_room`),
  ADD KEY `FK_RoomBuilding` (`id_building`),
  ADD KEY `FK_RoomCategory` (`id_room_category`);

--
-- Index pour la table `room_booking`
--
ALTER TABLE `room_booking`
  ADD PRIMARY KEY (`id_room_booking`);

--
-- Index pour la table `room_booking_services`
--
ALTER TABLE `room_booking_services`
  ADD PRIMARY KEY (`id_room_booking_services`),
  ADD KEY `FK_RoomBookingServicesRoomBooking` (`id_room_booking`),
  ADD KEY `FK_RoomBookingServicesService` (`id_room_service`);

  --
-- Index pour la table `room_booking_services`
--
ALTER TABLE `room_service`
  ADD PRIMARY KEY (`id_room_service`);

--
-- Index pour la table `room_category`
--
ALTER TABLE `room_category`
  ADD PRIMARY KEY (`id_room_category`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `building`
--
ALTER TABLE `building`
  MODIFY `id_building` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `festive_room`
--
ALTER TABLE `festive_room`
  MODIFY `id_festive_room` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `festive_room_booking`
--
ALTER TABLE `festive_room_booking`
  MODIFY `id_festive_room_booking` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `festive_room_booking_services`
--
ALTER TABLE `festive_room_booking_services`
  MODIFY `id_festive_room_booking_services` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `festive_room_service`
--
ALTER TABLE `festive_room_service`
  MODIFY `id_festive_room_service` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `invalid_booking_date`
--
ALTER TABLE `invalid_booking_date_room`
  MODIFY `id_invalid_booking_date_room` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `invalid_booking_date`
--
ALTER TABLE `invalid_booking_date_festive_room`
  MODIFY `id_invalid_booking_date_festive_room` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `news_letter`
--
ALTER TABLE `news_letter`
  MODIFY `id_news_letter` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `picture_galery`
--
ALTER TABLE `picture_galery`
  MODIFY `id_picture_galery` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `picture_room_category`
--
ALTER TABLE `picture_room_category`
  MODIFY `id_picture_room_category` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  MODIFY `id_restaurant_table` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `restaurant_table_booking`
--
ALTER TABLE `restaurant_table_booking`
  MODIFY `id_restaurant_table_booking` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `room`
--
ALTER TABLE `room`
  MODIFY `id_room` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;
--
-- AUTO_INCREMENT pour la table `room_booking`
--
ALTER TABLE `room_booking`
  MODIFY `id_room_booking` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=807;
--
-- AUTO_INCREMENT pour la table `room_booking_services`
--
ALTER TABLE `room_booking_services`
  MODIFY `id_room_booking_services` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `room_service`
--
ALTER TABLE `room_service`
  MODIFY `id_room_service` int(100) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `room_category`
--
ALTER TABLE `room_category`
  MODIFY `id_room_category` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
  
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `restaurant_table_booking`
--
ALTER TABLE `restaurant_table_booking`
  ADD CONSTRAINT `FK_RestaurantTableBookingClient` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `festive_room_booking_services`
--
ALTER TABLE `festive_room_booking_services`
  ADD CONSTRAINT `FK_FrbsFestiveRoomBooking` FOREIGN KEY (`id_festive_room_booking`) REFERENCES `festive_room_booking` (`id_festive_room_booking`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_FrbsService` FOREIGN KEY (`id_festive_room_service`) REFERENCES `festive_room_service` (`id_festive_room_service`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `festive_room_booking`
--
ALTER TABLE `festive_room_booking`
  ADD CONSTRAINT `FK_FestiveRoomBookingIdFestiveRoom` FOREIGN KEY (`id_festive_room`) REFERENCES `festive_room` (`id_festive_room`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_FestiveRoomBookingIdClient` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `FK_RoomBuilding` FOREIGN KEY (`id_building`) REFERENCES `building` (`id_building`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_RoomCategory` FOREIGN KEY (`id_room_category`) REFERENCES `room_category` (`id_room_category`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `room_booking_services`
--
ALTER TABLE `room_booking_services`
  ADD CONSTRAINT `FK_RoomBookingServicesRoomBooking` FOREIGN KEY (`id_room_booking`) REFERENCES `room_booking` (`id_room_booking`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_RoomBookingServicesService` FOREIGN KEY (`id_room_service`) REFERENCES `room_service` (`id_room_service`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `invalid_booking_date_room`
--
ALTER TABLE `invalid_booking_date_room`
  ADD CONSTRAINT `FK_InvalidBookingDateRoomRoom` FOREIGN KEY (`id_room`) REFERENCES `room` (`id_room`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `invalid_booking_date_festive_room`
--
ALTER TABLE `invalid_booking_date_festive_room`
  ADD CONSTRAINT `FK_InvalidBookingDateFestiveRoomFestiveRoom` FOREIGN KEY (`id_festive_room`) REFERENCES `festive_room` (`id_festive_room`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `picture_room_category`
--
ALTER TABLE `picture_room_category`
  ADD CONSTRAINT `FK_PRCidRoomCategory` FOREIGN KEY (`id_room_category`) REFERENCES `room_category` (`id_room_category`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
