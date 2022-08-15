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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Username` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Avatar` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `ethAddress` varchar(100) NOT NULL,
  `CreateAt` datetime DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ethAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (NULL,NULL,NULL,'0x14dC79964da2C08b23698B3D3cc7Ca32193d9955','2022-07-27 09:00:46',NULL),(NULL,NULL,NULL,'0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65','2022-07-26 16:25:39',NULL),(NULL,NULL,NULL,'0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec','2022-07-21 14:37:01',NULL),('ai','ai@gmail.com','https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/292560717_1234981960638397_9154309354428057424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KLc9vLxvUAsAX_mI9On&tn=FgQ66fVBgubasBJ_&_nc_ht=scontent.fdad1-1.fna&oh=03_AVK10xq2EdxIMcGoadjUt0HQSHl5jXJRmKfBaE8JDWn8ZA&oe=6307DB2B','0x20B71D1b6bFD7F2bd948E606b8567ebd952645ed','2022-07-26 09:16:00',NULL),('Abc','Abc@gmail.com','https://product.hstatic.net/1000219207/product/nike_air_jordan_1_low_unc_blue_a9e7a8b571c449c7b3df8b2cb580f89b_master.jpg','0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f','2022-07-21 08:37:00',NULL),('admin','admin@gmail.com','https://product.hstatic.net/1000219207/product/nike_air_jordan_1_low_unc_blue_a9e7a8b571c449c7b3df8b2cb580f89b_master.jpg','0x2647Cdfc7535626DC512ac200a573FF2b69B069E','2022-08-03 09:44:55',1),(NULL,NULL,NULL,'0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC','2022-07-26 10:48:11',NULL),('Le Van Quang','thinh@gmail.com','https://image-us.24h.com.vn/upload/2-2019/images/2019-05-25/1558802221-860-vi-dau-sieu-pham-hoat-hinh-he-doraemon-vua-quen-vua-la-unnamed--8--1558666578-width739height559.png','0x71ffD75bf2B3A373Cb4cc2bCb4AEC8bC4f59fD2b','2022-07-19 00:00:00',1),(NULL,NULL,NULL,'0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199','2022-07-26 08:51:34',NULL),('admin','admin@gmail.com','https://product.hstatic.net/1000219207/product/nike_air_jordan_1_low_unc_blue_a9e7a8b571c449c7b3df8b2cb580f89b_master.jpg','0x90F79bf6EB2c4f870365E785982E1f101E93b906','2022-07-26 12:58:11',NULL),('thinh','thinh@gmail.com','https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/292560717_1234981960638397_9154309354428057424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KLc9vLxvUAsAX_mI9On&tn=FgQ66fVBgubasBJ_&_nc_ht=scontent.fdad1-1.fna&oh=03_AVK10xq2EdxIMcGoadjUt0HQSHl5jXJRmKfBaE8JDWn8ZA&oe=6307DB2B','0x976EA74026E726554dB657fA54763abd0C3a0aa9','2022-07-27 09:02:58',NULL),('thinh','adn@gmail.com','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-dNWPTj.png','0xa0Ee7A142d267C1f36714E4a8F75612F20a79720','2022-08-01 14:51:13',NULL),('thinh','thinh@gmail.com','https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/292560717_1234981960638397_9154309354428057424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KLc9vLxvUAsAX_mI9On&tn=FgQ66fVBgubasBJ_&_nc_ht=scontent.fdad1-1.fna&oh=03_AVK10xq2EdxIMcGoadjUt0HQSHl5jXJRmKfBaE8JDWn8ZA&oe=6307DB2B','0xA80E6f2B3667003ff1CB47F2081Ce0b93ee15A96','2022-08-03 09:50:48',NULL),(NULL,NULL,NULL,'0xdD2FD4581271e230360230F9337D5c0430Bf44C0','2022-07-26 09:03:35',NULL),(NULL,NULL,NULL,'0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097','2022-07-21 14:49:39',NULL),(NULL,NULL,NULL,'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','2022-07-26 09:16:08',NULL),(NULL,NULL,NULL,'0xFABB0ac9d68B0B445fB7357272Ff202C5651694a','2022-07-25 10:50:23',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
