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
  PRIMARY KEY (`BookingID`),
  UNIQUE KEY `Checkint` (`Checkint`),
  UNIQUE KEY `Checkout` (`Checkout`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookingtable`
--

LOCK TABLES `bookingtable` WRITE;
/*!40000 ALTER TABLE `bookingtable` DISABLE KEYS */;
INSERT INTO `bookingtable` VALUES (92,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg',45,'26/07/2022','29/07/2022',26,'0x90F79bf6EB2c4f870365E785982E1f101E93b906'),(93,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg',30,'29/07/2022','31/07/2022',26,'0x90F79bf6EB2c4f870365E785982E1f101E93b906'),(97,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg',30,'01/08/2022','03/08/2022',26,'0x90F79bf6EB2c4f870365E785982E1f101E93b906'),(103,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg',75,'02/08/2022','07/08/2022',26,'0x976EA74026E726554dB657fA54763abd0C3a0aa9'),(104,'04 Bedroom Deluxe - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.171119','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG',90,'30/07/2022','01/08/2022',28,'0x976EA74026E726554dB657fA54763abd0C3a0aa9'),(107,'04 Bedroom Deluxe - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.171119','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG',135,'08/08/2022','11/08/2022',28,'0x976EA74026E726554dB657fA54763abd0C3a0aa9'),(108,'04 Bedroom Deluxe - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.171119','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG',90,'11/08/2022','13/08/2022',28,'0x976EA74026E726554dB657fA54763abd0C3a0aa9'),(110,'02 Bedroom Standard - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10141','9542 N Military Trl','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',36,'09/08/2022','12/08/2022',23,'0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f'),(112,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162','9544n North Military Trail','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',46,'07/08/2022','09/08/2022',24,'0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f'),(113,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162','9544n North Military Trail','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',46,'18/08/2022','20/08/2022',24,'0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f'),(114,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202','Ho Chi Minh','https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg',24,'29/08/2022','31/08/2022',22,'0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f');
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

-- Dump completed on 2022-07-29 16:11:11
