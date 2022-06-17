-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: dep
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branch_admin`
--

DROP TABLE IF EXISTS `branch_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch_admin` (
  `branch_id` bigint NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(255) DEFAULT NULL,
  `client_id` int NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch_admin`
--

LOCK TABLES `branch_admin` WRITE;
/*!40000 ALTER TABLE `branch_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `branch_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_admin`
--

DROP TABLE IF EXISTS `client_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_admin` (
  `CLIENT_ID` int NOT NULL,
  `CLIENT_FNAME` varchar(45) DEFAULT NULL,
  `CLIENT_LNAME` varchar(45) DEFAULT NULL,
  `CLIENT_EMAIL` varchar(45) DEFAULT NULL,
  `CLIENT_USERNAME` varchar(45) DEFAULT NULL,
  `CLIENT_PASSWORD` varchar(45) DEFAULT NULL,
  `CLIENT_PH_NUMBER` varchar(45) DEFAULT NULL,
  `BILLING_AMOUNT` double DEFAULT NULL,
  `EXP_DATE` datetime DEFAULT NULL,
  `COURSE_COUNT` int DEFAULT NULL,
  `FLAG` tinyint DEFAULT NULL,
  PRIMARY KEY (`CLIENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_admin`
--

LOCK TABLES `client_admin` WRITE;
/*!40000 ALTER TABLE `client_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_master`
--

DROP TABLE IF EXISTS `client_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_master` (
  `CLIENT_ID` int NOT NULL,
  `CLIENT_NAME` varchar(45) DEFAULT NULL,
  `BILLING_AMOUNT` double DEFAULT NULL,
  `EXP_DATE` date DEFAULT NULL,
  `TEMPLATES_COUNT` int DEFAULT NULL,
  PRIMARY KEY (`CLIENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_master`
--

LOCK TABLES `client_master` WRITE;
/*!40000 ALTER TABLE `client_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content_creator`
--

DROP TABLE IF EXISTS `content_creator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_creator` (
  `CREATOR_ID` int NOT NULL,
  `CREATOR_FLNAME` varchar(45) DEFAULT NULL,
  `CREATOR_LNAME` varchar(45) DEFAULT NULL,
  `CREATOR_EMAIL` varchar(45) DEFAULT NULL,
  `CREATOR_USERNAME` varchar(45) DEFAULT NULL,
  `CREATOR_PASSWORD` varchar(45) DEFAULT NULL,
  `CREATOR_PH_NUMBER` varchar(45) DEFAULT NULL,
  `ADMIN_ID` int DEFAULT NULL,
  PRIMARY KEY (`CREATOR_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_creator`
--

LOCK TABLES `content_creator` WRITE;
/*!40000 ALTER TABLE `content_creator` DISABLE KEYS */;
/*!40000 ALTER TABLE `content_creator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_catalog`
--

DROP TABLE IF EXISTS `course_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_catalog` (
  `C_ID` int NOT NULL,
  `COURSE_NAME` varchar(45) NOT NULL,
  `COURSE_DETAILS` varchar(100) DEFAULT NULL,
  `COURSE_DURATION` varchar(20) DEFAULT NULL,
  `CP_ID` int DEFAULT NULL,
  `PRICE` double NOT NULL,
  PRIMARY KEY (`C_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_catalog`
--

LOCK TABLES `course_catalog` WRITE;
/*!40000 ALTER TABLE `course_catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_page`
--

DROP TABLE IF EXISTS `course_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_page` (
  `CP_ID` int NOT NULL,
  `TEM_ID` int DEFAULT NULL,
  `P_ID` int DEFAULT NULL,
  `TEXTBOX_ID` int DEFAULT NULL,
  `CONTENT` varchar(255) DEFAULT NULL,
  `EDITED_BY` varchar(45) DEFAULT NULL,
  `EDITED_ON` datetime DEFAULT NULL,
  `STATUS` varchar(20) DEFAULT NULL,
  `AUDIO` blob,
  PRIMARY KEY (`CP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_page`
--

LOCK TABLES `course_page` WRITE;
/*!40000 ALTER TABLE `course_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeelogin`
--

DROP TABLE IF EXISTS `employeelogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeelogin` (
  `employeelogin_id` int NOT NULL AUTO_INCREMENT,
  `change_password_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employee_id` varchar(255) DEFAULT NULL,
  `flag` bit(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password1` varchar(255) DEFAULT NULL,
  `password2` varchar(255) DEFAULT NULL,
  `password3` varchar(255) DEFAULT NULL,
  `updated_by` bit(1) DEFAULT NULL,
  `updated_on` date DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeelogin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeelogin`
--

LOCK TABLES `employeelogin` WRITE;
/*!40000 ALTER TABLE `employeelogin` DISABLE KEYS */;
INSERT INTO `employeelogin` VALUES (1,NULL,'client@gmail.com',NULL,_binary '','client',NULL,NULL,NULL,NULL,'2022-06-01','client','client'),(2,NULL,'admin@gmail.com',NULL,_binary '','admin',NULL,NULL,NULL,NULL,'2022-06-01','admin','admin');
/*!40000 ALTER TABLE `employeelogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (4);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_master`
--

DROP TABLE IF EXISTS `login_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_master` (
  `ID` int NOT NULL,
  `USERNAME` varchar(45) DEFAULT NULL,
  `PASSWORD` varchar(45) DEFAULT NULL,
  `LOGIN_BY` varchar(45) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `LOGIN_ON` datetime DEFAULT NULL,
  `LOGOUT_ON` datetime DEFAULT NULL,
  `UPDATED_PASSWORD` varchar(45) DEFAULT NULL,
  `UPDATED_ON` datetime DEFAULT NULL,
  `FLAG` tinyint DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_master`
--

LOCK TABLES `login_master` WRITE;
/*!40000 ALTER TABLE `login_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_table`
--

DROP TABLE IF EXISTS `login_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_table` (
  `ID` int NOT NULL,
  `USERNAME` varchar(15) NOT NULL,
  `PASSWORD` varchar(15) NOT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `USER_TYPE` varchar(10) DEFAULT NULL,
  `CHANGE_PASSSWORD_DATE` datetime DEFAULT NULL,
  `USER_LOGIN` datetime DEFAULT NULL,
  `USER_LOGOUT` datetime DEFAULT NULL,
  `UPDATED_ON` datetime DEFAULT NULL,
  `FLAG` tinyint DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UserName_UNIQUE` (`USERNAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_table`
--

LOCK TABLES `login_table` WRITE;
/*!40000 ALTER TABLE `login_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page_catalog`
--

DROP TABLE IF EXISTS `page_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_catalog` (
  `P_ID` int NOT NULL AUTO_INCREMENT,
  `TEM_ID` int DEFAULT NULL,
  `TEXTBOX_ID` int DEFAULT NULL,
  PRIMARY KEY (`P_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page_catalog`
--

LOCK TABLES `page_catalog` WRITE;
/*!40000 ALTER TABLE `page_catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `page_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `PAYMENTS_ID` int NOT NULL AUTO_INCREMENT,
  `AMOUNT_PAID` double DEFAULT NULL,
  `CLIENT_ID` int DEFAULT NULL,
  `TRANSACTION_DATE` datetime DEFAULT NULL,
  `TRANSACTION_ID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`PAYMENTS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `super_admin`
--

DROP TABLE IF EXISTS `super_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `super_admin` (
  `ID` int NOT NULL,
  `NAME` varchar(40) NOT NULL,
  `USER_NAME` varchar(25) NOT NULL,
  `PASSWORD` varchar(10) NOT NULL,
  `STATUS` varchar(15) DEFAULT NULL,
  `USER_TYPE` varchar(20) DEFAULT NULL,
  `LOGIN_BY` varchar(20) DEFAULT NULL,
  `UPDATED_ON` datetime DEFAULT NULL,
  `CLIENT_ID` int DEFAULT NULL,
  `C_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `super_admin`
--

LOCK TABLES `super_admin` WRITE;
/*!40000 ALTER TABLE `super_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `super_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `template_catalog`
--

DROP TABLE IF EXISTS `template_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `template_catalog` (
  `TEM_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  `URL` varchar(45) DEFAULT NULL,
  `HEADING` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`TEM_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `template_catalog`
--

LOCK TABLES `template_catalog` WRITE;
/*!40000 ALTER TABLE `template_catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `template_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `textbox_catalog`
--

DROP TABLE IF EXISTS `textbox_catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `textbox_catalog` (
  `TB_ID` int NOT NULL,
  `TB_CONTENT` varchar(250) DEFAULT NULL,
  `PAGE_ID` int DEFAULT NULL,
  PRIMARY KEY (`TB_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textbox_catalog`
--

LOCK TABLES `textbox_catalog` WRITE;
/*!40000 ALTER TABLE `textbox_catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `textbox_catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin`
--

DROP TABLE IF EXISTS `user_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_admin` (
  `USER_ID` int NOT NULL,
  `USER_FNAME` varchar(45) DEFAULT NULL,
  `USER_LNAME` varchar(45) DEFAULT NULL,
  `USER_EMAIL` varchar(45) DEFAULT NULL,
  `USER_USERNAME` varchar(45) DEFAULT NULL,
  `USER_PASSWORD` varchar(45) DEFAULT NULL,
  `USER_PH_NUMBER` varchar(45) DEFAULT NULL,
  `BRANCH_ID` int DEFAULT NULL,
  `CLIENT_ID` int DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin`
--

LOCK TABLES `user_admin` WRITE;
/*!40000 ALTER TABLE `user_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_courses`
--

DROP TABLE IF EXISTS `user_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_courses` (
  `COURSE_ID` int NOT NULL,
  `USER_ID` int NOT NULL,
  `C_ID` int NOT NULL,
  `STATUS` varchar(20) DEFAULT NULL,
  `CREATED_BY` varchar(20) DEFAULT NULL,
  `CREATED_ON` datetime DEFAULT NULL,
  PRIMARY KEY (`COURSE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_courses`
--

LOCK TABLES `user_courses` WRITE;
/*!40000 ALTER TABLE `user_courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_master`
--

DROP TABLE IF EXISTS `user_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_master` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(45) DEFAULT NULL,
  `USER_TYPE` varchar(45) DEFAULT NULL,
  `CLIENT_ID` int DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_master`
--

LOCK TABLES `user_master` WRITE;
/*!40000 ALTER TABLE `user_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-01 12:20:27
