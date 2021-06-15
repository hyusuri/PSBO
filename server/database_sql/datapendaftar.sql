-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2021 at 09:30 PM
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
-- Table structure for table `datapendaftar`
--

CREATE TABLE `datapendaftar` (
  `id_daftar` int(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `beasiswa_id` int(255) NOT NULL,
  `nama` text NOT NULL,
  `nim` varchar(11) NOT NULL,
  `fakultas` text NOT NULL,
  `departemen` text NOT NULL,
  `ipk` float NOT NULL,
  `semester` int(15) NOT NULL,
  `no_rekening` int(20) NOT NULL,
  `link_ktm` text NOT NULL,
  `link_kk` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datapendaftar`
--

INSERT INTO `datapendaftar` (`id_daftar`, `username`, `beasiswa_id`, `nama`, `nim`, `fakultas`, `departemen`, `ipk`, `semester`, `no_rekening`, `link_ktm`, `link_kk`) VALUES
(11, 'dids', 1, 'didipan guyu', 'G762839409', 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 'Ilmu Dukun', 4, 7, 683493643, '/img/68237638.png', '/img/68237634.png'),
(12, 'did', 1, 'didipan guyu', 'G762839409', 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 'Ilmu Dukun', 4, 7, 683493643, '/img/68237638.png', '/img/68237634.png'),
(13, 'dida', 1, 'didipan guyu', 'G762839409', 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 'Ilmu Dukun', 4, 7, 683493643, '/img/68237638.png', '/img/68237634.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datapendaftar`
--
ALTER TABLE `datapendaftar`
  ADD PRIMARY KEY (`id_daftar`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datapendaftar`
--
ALTER TABLE `datapendaftar`
  MODIFY `id_daftar` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
