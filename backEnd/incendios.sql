-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: incendios
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'(imagen) modelo de predicción general',NULL,NULL),(2,'(imagen) CIIC-01 Magdalena Contreras',NULL,NULL),(3,'(imagen) CIIC-02  Tlalpan',NULL,NULL),(4,'(imagen) CIIC-03  Milpa Alta',NULL,NULL),(5,'(imagen) CIIC-04  Tlahuác-Xochimilco',NULL,NULL),(6,'(imagen) Grado de efectividad',NULL,NULL),(7,'(pdf) Grado de efectividad',NULL,NULL),(8,'(excel) Grado de efectividad',NULL,NULL),(9,'(imagen) Incendios confirmados',NULL,NULL),(10,'(pdf) Incendios confirmados',NULL,NULL),(11,'(imagen) Corte semanal',NULL,NULL),(12,'(pdf) Corte semanal',NULL,NULL),(13,'(imagen) cortes del día 8:00 am',NULL,NULL),(14,'(imagen) cortes del día 12:00 pm',NULL,NULL),(15,'(imagen) cortes del día 4:00 pm',NULL,NULL),(16,'(imagen) cortes del día 8:00 pm',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_id` int(255) NOT NULL,
  `category_id` int(255) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_post_user` (`user_id`),
  KEY `fk_post_category` (`category_id`),
  CONSTRAINT `fk_post_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_post_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,10,4,'Ska','','1593542532SAM_1414.JPG','2020-06-30 18:42:50','2020-06-30 18:42:50'),(2,10,3,'jamaica','','1593542679SAM_1415.JPG','2020-06-30 18:44:40','2020-06-30 18:44:40'),(3,10,3,'Jamaincan Ska','<p>Ska</p>','1593543557Captura de pantalla_2019-10-19_00-27-51.png','2020-06-30 18:59:18','2020-06-30 18:59:18'),(4,10,11,'Ska','<p>Ska</p>','1593543702EHN0dZ-WsAAfV63.jpeg','2020-06-30 19:01:44','2020-06-30 19:01:44'),(5,10,8,'Holaa enfermera','<p>Jamaican Ska</p>','159354380508-Takashi-Murakami.jpg','2020-06-30 19:03:26','2020-06-30 19:03:26'),(6,10,1,'Incendios el dia 30 Junio','<p>Incendios en Xochimilco</p>','1593545821unnamed.jpg','2020-06-30 19:37:02','2020-06-30 19:37:02'),(7,10,2,'Prueba2','<p>2</p>','1593547018pleca_tecnm.jpg','2020-06-30 19:56:59','2020-06-30 19:56:59');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(550) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Guiller','Cubeiro','User_Role','free2hume@hotmail.com','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','Hola Mundo','15934336912018-04-20 15.13.45.jpg','2020-06-26 02:52:59','2020-06-29 12:28:12',NULL),(9,'Guiller','Cubeiro','User_Role','elshow1@hotmail.com','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','Rexio','159343362230728469_2144197269145128_6593301500787101093_n.jpg','2020-06-29 11:32:06','2020-06-29 12:27:04',NULL),(10,'Jesus','Lopez','User_Role','jesus@itma.mx','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','Ingeniero','15935292031716279_1.jpg','2020-06-30 14:59:24','2020-06-30 15:00:04',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-30 15:30:06
