USE fake_amazon;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` varchar(10) NOT NULL,
  `age` int NOT NULL,
  `email` varchar(45),
  `address` varchar(45),
  `shopping_cart` JSON,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`name`,`password`, `type`,`age`,`email`,`address`, `shopping_cart`)
VALUES
  ("root", "root", "seller", 45, "root@gmail.com", "NotHome", JSON_ARRAY());