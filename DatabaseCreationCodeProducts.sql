-- Install mySQLWorkbench (Windows: Install recommended installer, MacOS: Install both workbench and mysql server)
-- Keep the username as "root"
-- put "soen341db" as password for the database (Note: make sure it's written exactly or else you won't be able to connect)
-- npm install mysql

-- CODE FOR WORKBENCH:
CREATE DATABASE fake_amazon;
USE fake_amazon;
CREATE TABLE `products` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Description` longtext,
  `Price` decimal(10,2) NOT NULL,
  `Currency` varchar(45) DEFAULT 'CAD',
  `Brand` varchar(45) DEFAULT NULL,
  `Seller` varchar(45) DEFAULT NULL,
  `Stock` int NOT NULL,
  `Link` varchar(180) DEFAULT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`Name`,`Description`,`Price`,`Currency`,`Brand`,`Seller`,`Stock`, `Link`)
VALUES
  ("Banana","yellow fruit",0.99,"CAD","Fake Amazon", "Fake Amazon",5, "turboapp/apps/web/src/assets/images/banana.jpeg"),
  ("Calculator","math tools",39.99,"CAD","CASIO", "Fake Amazon",20, "turboapp/apps/web/src/assets/images/calculator.jpeg" ),
  ("Chocolate","tasty chocolate",3.98,"CAD","Kit Kat", "Fake Amazon",30, "turboapp/apps/web/src/assets/images/chocalate.jpeg"),
  ("Strawberry","red fruit", 4.99,"CAD","Fake Amazon", "South American Business ",6272, "/turboapp/apps/web/src/assets/images/strawberry.jpeg" ),
  ("Bookshelf","wooden object that can hold books",249.99,"CAD","Fake Amazon", "Costco",29, "turboapp/apps/web/src/assets/images/bookshelf.jpeg"),
  ("Phone","Electrical device that allows you to complete several tasks", 599.99,"CAD","Amazon", "Fake Amazon",92933, "turboapp/apps/web/src/assets/images/phone.jpeg")