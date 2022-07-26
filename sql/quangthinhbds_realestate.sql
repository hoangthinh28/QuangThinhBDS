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
  `ethAddress` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RealEstateId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realestate`
--

LOCK TABLES `realestate` WRITE;
/*!40000 ALTER TABLE `realestate` DISABLE KEYS */;
INSERT INTO `realestate` VALUES (1,'Studio Apartment - Nội thất Cơ bản - S2.10 - Vinhomes Ocean Park','S2.10',6.99,'Viet Nam','45 Phan Thanh - Đà Nẵng','North',2,2,'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg','60.2',2,5,'Co mot han anh anh dh an an','S.10','2022-07-19 00:00:00','0x71ffD75bf2B3A373Cb4cc2bCb4AEC8bC4f59fD2b'),(2,'Studio Apartment - Nội thất  - S2.10 - Vinhomes Ocean Park','S2.10',6.99,'Viet Nam','45 Phan Thanh - Đà Nẵng','North',2,2,'https://cdn.tgdd.vn/Files/2020/12/29/1316941/cach-cai-hinh-nen-doi-theo-ngay-dem-tren-iphone-d-1.jpg','60.2',2,5,'Co mot han anh anh dh an an','S.10','2022-07-21 08:58:02','0x71ffD75bf2B3A373Cb4cc2bCb4AEC8bC4f59fD2b'),(19,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.1016',12,'USA','9544n North Military Trail','East',5,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','80.3',2,2,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.','S2.10','2022-07-21 14:40:04','0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec'),(20,'02 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.100603',23,'Viet Nam','Da Nang','East',6,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','67.7',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…','S2.10','2022-07-21 14:48:21','0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec'),(21,'02 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.100603',12,'Viet Nam','Da Nang','East',5,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','67.7',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…','S2.10','2022-07-21 14:51:00','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097'),(22,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202',12,'Viet Nam','Ho Chi Minh','West',7,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','70.3',2,4,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.','S2.10','2022-07-21 15:54:14','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097'),(23,'02 Bedroom Standard - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10141',12,'Viet Nam','9542 N Military Trl','East',5,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','75.2',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.10','2022-07-21 16:09:43','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097'),(24,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162',23,'Viet Nam','9544n North Military Trail','East',5,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','80.3',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.10','2022-07-21 16:31:03','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097'),(25,'02 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.100603',9,'Viet Nam','Da Nang','East',9,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw98d998a9/images/Vinhomes%20Ocean%20Park/2PN_sup_logo/2BR_Sup_Lag_0332.jpg','75.3',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…','S2.10','2022-07-25 10:53:43','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'),(26,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109',15,'Viet Nam','Ho Chi Minh','West',5,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg','60',1,2,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.20','2022-07-26 09:01:37','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199'),(28,'04 Bedroom Deluxe - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.171119',45,'Viet Nam','Ho Chi Minh','West',11,4,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG','112',3,3,'Căn hộ bao gồm 3 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân. Hơn thế nữa, với diện tích rộng rãi, cư dân có thể bố trí các không gian chức năng dễ dàng.','S2.17','2022-07-26 16:32:40','0x90F79bf6EB2c4f870365E785982E1f101E93b906');
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

-- Dump completed on 2022-07-26 17:15:05
