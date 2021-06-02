-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2021 at 06:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbberkas`
--

-- --------------------------------------------------------

--
-- Table structure for table `databerkas`
--

CREATE TABLE `databerkas` (
  `id_lampiran` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `link_ktm` varchar(100) DEFAULT NULL,
  `link_kk` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `databerkas`
--

INSERT INTO `databerkas` (`id_lampiran`, `username`, `link_ktm`, `link_kk`) VALUES
(15, 'freeday', NULL, NULL),
(16, 'freday', 'images\\1622643472848-csii.png', 'images\\1622643227989-csi-re.png'),
(17, 'zyru', 'images\\1622643687132-29659948124.png', 'images\\1622643676018-2965994814.png'),
(18, 'zyu', NULL, NULL),
(19, 'zyrex', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `databerkas`
--
ALTER TABLE `databerkas`
  ADD PRIMARY KEY (`id_lampiran`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `databerkas`
--
ALTER TABLE `databerkas`
  MODIFY `id_lampiran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
