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
  `countBooked` int DEFAULT '0',
  `countViewed` int DEFAULT '0',
  PRIMARY KEY (`RealEstateId`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realestate`
--

LOCK TABLES `realestate` WRITE;
/*!40000 ALTER TABLE `realestate` DISABLE KEYS */;
INSERT INTO `realestate` VALUES (22,'01 Bedroom Deluxe - Nội thất Cơ bản - Vinhomes Ocean Park','S2.101202',0.002,'Viet Nam','Ho Chi Minh','West',7,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','70.3',2,4,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.','S2.10','2022-07-21 15:54:14','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',16,50),(23,'02 Bedroom Standard - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10141',0.001,'Viet Nam','9542 N Military Trl','East',5,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','75.2',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.10','2022-07-21 16:09:43','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',4,7),(24,'Studio Apartment - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10162',0.0025,'Viet Nam','9544n North Military Trail','East',5,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','80.3',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.10','2022-07-21 16:31:03','0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',8,20),(26,'02 Bedroom Standard - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.201109',0.002,'Viet Nam','Ho Chi Minh','West',5,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw912a868f/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_5_large.jpg','60',1,2,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.20','2022-07-26 09:01:37','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',5,4),(28,'04 Bedroom Deluxe - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.171119',0.0015,'Viet Nam','Ho Chi Minh','West',11,4,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG','112',3,3,'Căn hộ bao gồm 3 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân. Hơn thế nữa, với diện tích rộng rãi, cư dân có thể bố trí các không gian chức năng dễ dàng.','S2.17','2022-07-26 16:32:40','0x90F79bf6EB2c4f870365E785982E1f101E93b906',11,20),(33,'05 Bedroom Standard - Nội thất Cơ bản- Vinhomes Ocean Park','S2.20160',0.0035,'Viet Nam','Da Nang','East',19,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG','80.3',2,4,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.20','2022-08-04 10:20:18','0x2647Cdfc7535626DC512ac200a573FF2b69B069E',5,7),(34,'03 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.300603',0.005,'Viet Nam','Da Nang','West',22,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw1ed8c1a5/images/Vinhomes%20Ocean%20Park/2PN_sup_logo/2BR_Sup_Lag_0331.jpg','76',2,4,'Căn hộ bao gồm 3 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…','S2.30','2022-08-11 14:36:50','0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0,0),(35,'06 Bedroom Premium - Premium - Vinhomes Ocean Park','S2.300605',0.0036,'Viet Nam','Da Nang','East',22,4,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw1ed8c1a5/images/Vinhomes%20Ocean%20Park/2PN_sup_logo/2BR_Sup_Lag_0331.jpg','120',3,6,'Căn hộ bao gồm 2 phòng ngủ, 1 phòng khách, 2 nhà vệ sinh, 1 phòng bếp, lô gia và một không gian đa năng cư dân có thể sử dụng làm phòng đọc sách, không gian chơi cho trẻ em hoặc góc làm việc riêng,…\n','S2.30','2022-08-12 13:32:15','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0,0),(36,'01 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.20251',0.003,'Viet Nam','Da Nang','East',16,2,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw7b89310d/images/Fullkodeco/OutsideOCP/Image_9_large.jpg','79',2,4,'Căn hộ bao gồm 2 phòng ngủ, 2 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.\n','S2.20','2022-08-12 14:08:40','0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0,0),(37,'Studio Apartment - Nội thất Đầy đủ - Vinhomes Ocean Park','S2.10136',0.003,'Viet Nam','Da Nang','East',5,1,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw7b89310d/images/Fullkodeco/OutsideOCP/Image_9_large.jpg','53',1,2,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.Đặc biệt, căn hộ có view VinUni đẹp và thoáng.','S2.10','2022-08-12 14:32:10','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0,0),(38,'01 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.10032',0.0012,'Viet Nam','Da Nang','East',7,1,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG','46',1,1,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.Đặc biệt, căn hộ có view VinUni đẹp và thoáng.','S2.10','2022-08-12 14:40:28','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0,0),(39,'03 Bedroom Standard- Premium - Vinhomes Ocean Park','S2.10562',0.0056,'Viet Nam','Da Nang','East',22,3,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dwc4acbbb6/images/Fullkodeco/OutsideOCP/Image_8_large.jpg','76',2,2,'Căn hộ bao gồm 3 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.\n','S2.10','2022-08-12 15:00:25','0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96',0,0),(40,'01 Bedroom Standard- Premium - Vinhomes Ocean Park','S2.20362',0.004,'Viet Nam','Da Nang','East',12,1,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/default/dw7b89310d/images/Fullkodeco/OutsideOCP/Image_9_large.jpg','76',1,2,'Căn hộ bao gồm 1 phòng ngủ, 1 phòng khách, 1 nhà vệ sinh, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân. Hơn thế nữa, với diện tích rộng rãi, cư dân có thể bố trí các không gian chức năng dễ dàng.','S2.20','2022-08-12 16:25:19','0x2647Cdfc7535626DC512ac200a573FF2b69B069E',0,0),(41,'01 Bedroom Superior - Nội thất Cơ bản - Vinhomes Ocean Park','S2.1016',0.003,'Viet Nam','9544 N Military Trl','East',16,1,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dwa27cd955/images/Fullkodeco/3BR%20Deluxe_LAR/3BR_LAR_(1).JPG','53',1,2,'Căn hộ studio là loại hình căn hộ theo phong cách “tất cả trong một” – bao gồm phòng khách, phòng ngủ, phòng bếp được thiết kế tinh tế và tối ưu hóa chỉ trong một không gian nhất định. Là dòng căn hộ được thiết kế hướng tới người độc thân, các cặp vợ chồng trẻ mới kết hôn và khách hàng đầu tư cho thuê.','S2.10','2022-08-13 13:03:17','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0,0),(42,'06 Bedroom Standard - Nội thất Đầy đủ - Tòa S2.17 - Vinhomes Ocean Park','S2.300235',0.007,'Viet Nam','Da Nang','East',22,6,'https://stay.vinhomes.vn/on/demandware.static/-/Sites-vhm_leasing_en_master/vi_VN/dw60b52989/images/Vinhomes%20Ocean%20Park/2PN_Standard/2PN_Standard_6_large.jpg','156',3,8,'Căn hộ bao gồm 6 phòng ngủ, 1 phòng khách, 1 phòng bếp và lô gia. Được thiết kế với nhiều cửa sổ hướng ra bên ngoài đón gió và ánh sáng tự nhiên, hứa hẹn mang đến không gian sống thoải mái cho cư dân.','S2.30','2022-08-13 13:07:20','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed',0,1);
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

-- Dump completed on 2022-08-15 13:19:16
