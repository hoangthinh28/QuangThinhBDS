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
-- Table structure for table `realestate`
--

DROP TABLE IF EXISTS `realestate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realestate` (
  `RealEstateId` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `RoomCode` varchar(50) NOT NULL,
  `Price` float NOT NULL,
  `Location` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Address` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Direct` varchar(100) NOT NULL,
  `Floor` int NOT NULL,
  `MaxRoom` int NOT NULL,
  `imgURL` varchar(1000) NOT NULL,
  `Area` varchar(30) NOT NULL,
  `Toilet` int NOT NULL,
  `People` int NOT NULL,
  `Detail` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Building` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `CreateAt` datetime NOT NULL,
  `datesBooked` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT '[]',
  `ethAddress` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RealEstateId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realestate`
--

LOCK TABLES `realestate` WRITE;
/*!40000 ALTER TABLE `realestate` DISABLE KEYS */;
INSERT INTO `realestate` VALUES (1,'Studio Apartment - N???i th???t C?? b???n - S2.10 - Vinhomes Ocean Park','S2.10',6,'Viet Nam','45 Phan Thanh - ???? N???ng','North',2,2,'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg','60.2',2,5,'Co mot han anh anh dh an an','S.10','2022-07-19 00:00:00','[]','0x71ffD75bf2B3A373Cb4cc2bCb4AEC8bC4f59fD2b'),(5,'02 Bedroom Standard - N???i th???t C?? b???n - T??a S2.10 - Vinhomes Ocean Park','S2.101620',12,'Viet Nam','Da Nang','West',16,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwdb0214d1/images/Vinhomes%20Ocean%20Park/2PN_sup_logo/2BR_Sup_Lag_0341.jpg','59,1',1,2,'C??n h??? bao g???m 2 ph??ng ng???, 1 ph??ng kh??ch, 1 ph??ng b???p v?? l?? gia. ???????c thi???t k??? v???i nhi???u c???a s??? h?????ng ra b??n ngo??i ????n gi?? v?? ??nh s??ng t??? nhi??n, h???a h???n mang ?????n kh??ng gian s???ng tho???i m??i cho c?? d??n.','S2.10','2022-07-22 14:33:12','[]','0x2546BcD3c84621e976D8185a91A922aE77ECEc30'),(6,'Studio Apartment - N???i th???t C?? b???n - T??a S2.17 - Vinhomes Ocean Park','S2.170221',5,'Viet Nam','Da Nang','East',17,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwead3b914/images/2BR_Note_EN/2BR_Del_Lar6.jpg','65',2,4,'C??n h??? studio l?? lo???i h??nh c??n h??? theo phong c??ch ???t???t c??? trong m???t??? ??? bao g???m ph??ng kh??ch, ph??ng ng???, ph??ng b???p ???????c thi???t k??? tinh t??? v?? t???i ??u h??a ch??? trong m???t kh??ng gian nh???t ?????nh. L?? d??ng c??n h??? ???????c thi???t k??? h?????ng t???i ng?????i ?????c th??n, c??c c???p v??? ch???ng tr??? m???i k???t h??n v?? kh??ch h??ng ?????u t?? cho thu??.','S2.17	','2022-07-22 16:19:17','[]','0x2546BcD3c84621e976D8185a91A922aE77ECEc30'),(7,'02 Bedroom Deluxe - N???i th???t C?? b???n - T??a S2.10 - Vinhomes Ocean Park','S.02121',8,'Viet Nam','HCM','East',15,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa90f82b0/images/Vinhomes%20Ocean%20Park/2PN_Deluxe_logo/2BR_Dex_Lag_0390.jpg','69',2,4,'C??n h??? bao g???m 2 ph??ng ng???, 1 ph??ng kh??ch, 2 nh?? v??? sinh, 1 ph??ng b???p, l?? gia v?? m???t kh??ng gian ??a n??ng c?? d??n c?? th??? s??? d???ng l??m ph??ng ?????c s??ch, kh??ng gian ch??i cho tr??? em ho???c g??c l??m vi???c ri??ng,???','S.02','2022-07-22 16:48:16','[]','0x2546BcD3c84621e976D8185a91A922aE77ECEc30');
/*!40000 ALTER TABLE `realestate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 17:37:19
