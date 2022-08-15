-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: quangthinhbds
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `bookingtable`
--

DROP TABLE IF EXISTS `bookingtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookingtable` (
  `BookingID` int NOT NULL AUTO_INCREMENT,
  `RealEstateTitle` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `RoomCode` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Address` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `imgURL` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `Checkint` varchar(250) DEFAULT NULL,
  `Checkout` varchar(250) DEFAULT NULL,
  `RealEstateId` int DEFAULT NULL,
  `ethAddress` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `isPaymented` int DEFAULT '0',
  PRIMARY KEY (`BookingID`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookingtable`
--

LOCK TABLES `bookingtable` WRITE;
/*!40000 ALTER TABLE `bookingtable` DISABLE KEYS */;
INSERT INTO `bookingtable` VALUES (95,'05 Bedroom Standard - Nội thất Cơ bản- Vinhomes Ocean Park','S2.20160','Da Nang','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG',0.014,'2022-08-11T17:00:00.000Z','2022-08-15T17:00:00.000Z',33,'0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0),(96,'02 Bedroom Standard - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10141','9542 N Military Trl','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.005,'2022-08-12T17:00:00.000Z','2022-08-17T17:00:00.000Z',23,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0),(97,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162','9544n North Military Trail','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.0125,'2022-08-12T17:00:00.000Z','2022-08-17T17:00:00.000Z',24,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0),(98,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.004,'2022-08-14T17:00:00.000Z','2022-08-16T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1),(99,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.004,'2022-08-17T17:00:00.000Z','2022-08-19T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1),(100,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',0.01,'2022-08-20T17:00:00.000Z','2022-08-25T17:00:00.000Z',22,'0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',1);
/*!40000 ALTER TABLE `bookingtable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-15 13:19:16
