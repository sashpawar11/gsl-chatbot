-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2021 at 07:24 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gslchatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `department_details`
--

CREATE TABLE `department_details` (
  `opt_id` int(11) NOT NULL,
  `dept_name` varchar(100) NOT NULL,
  `dept_email` text NOT NULL,
  `dept_phone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department_details`
--

INSERT INTO `department_details` (`opt_id`, `dept_name`, `dept_email`, `dept_phone`) VALUES
(1, 'IT-ERP', 'it.erp@goashipyard.in', 250252),
(2, 'IT-EDP', 'it.edp@goashipyard.com', 2516913),
(3, 'Ship Repair', 'ship.repair@goashipyard.com', 2512568);

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_base`
--

CREATE TABLE `knowledge_base` (
  `id` int(11) NOT NULL,
  `questions` text NOT NULL,
  `answers` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `knowledge_base`
--

INSERT INTO `knowledge_base` (`id`, `questions`, `answers`) VALUES
(1, 'Hello', 'Hi!'),
(2, 'What is your name?', 'My name is GSL-chatbot'),
(3, 'Hi', 'Hello!'),
(4, 'Thanks|Thank you|Thankyou', 'It was great helping you, goodbye user!'),
(5, 'Who is the current cmd? | CMD | Who is the head | Current CMD | cmd', 'Cmde B.B. Nagpal, NM,IN(Retd) - Chairman & Managing Director');

-- --------------------------------------------------------

--
-- Table structure for table `newqueries`
--

CREATE TABLE `newqueries` (
  `ID` int(11) NOT NULL,
  `que` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newqueries`
--

INSERT INTO `newqueries` (`ID`, `que`) VALUES
(7, 'What is your name '),
(9, 'What is your age'),
(25, 'What is your name!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department_details`
--
ALTER TABLE `department_details`
  ADD PRIMARY KEY (`opt_id`);

--
-- Indexes for table `knowledge_base`
--
ALTER TABLE `knowledge_base`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newqueries`
--
ALTER TABLE `newqueries`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `knowledge_base`
--
ALTER TABLE `knowledge_base`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `newqueries`
--
ALTER TABLE `newqueries`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
