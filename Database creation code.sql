-- Install mySQLWorkbench (Windows: Install recommended installer, MacOS: Install both workbench and mysql server)
-- Keep the username as "root"
-- put "soen341db" as password for the database (Note: make sure it's written exactly or else you won't be able to connect)
-- npm install mysql

-- CODE FOR WORKBENCH:
CREATE DATABASE fake_amazon;
USE fake_amazon;

CREATE TABLE `products` (
  `productID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` longtext,
  `price` decimal(10,2) NOT NULL,
  `currency` varchar(45) DEFAULT 'CAD',
  `brand` varchar(45) DEFAULT NULL,
  `seller` varchar(45) DEFAULT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`name`,`description`,`price`,`currency`,`brand`,`seller`,`stock`)
VALUES
  ("Banana","yellow fruit",0.99,"CAD","Fake Amazon", "Fake Amazon",5),
  ("Calculator","math tools",39.99,"CAD","CASIO", "Fake Amazon",20),
  ("Chocolate","tasty chocolate",3.98,"CAD","Kit Kat", "Fake Amazon",30),
  ("Strawberry","red fruit", 4.99,"CAD","Fake Amazon", "South American Business ",6272),
  ("Bookshelf","wooden object that can hold books",249.99,"CAD","Fake Amazon", "Costco",29),
  ("Phone","Electrical device that allows you to complete several tasks", 599.99,"CAD","Amazon", "Fake Amazon",92933)