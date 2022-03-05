USE fake_amazon;
CREATE TABLE `User` (
    `user_id` int  NOT NULL AUTO_INCREMENT ,
    `name` varchar(45)  NOT NULL ,
    -- Not Null
    `password` varchar(45)  NOT NULL ,
    -- t or f for seller
    `seller` boolean  NOT NULL ,
    -- Not Null
    `age` int  NOT NULL ,
    `email` varchar(45)  NOT NULL ,
    `address` varchar(45)  NOT NULL ,
    PRIMARY KEY (
        `user_id`
    )
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


  
CREATE TABLE `Order` (
    `order_id` int  NOT NULL AUTO_INCREMENT ,
    `user_id` int  NOT NULL ,
    `total_amount` int  NOT NULL ,
    `order_status_id` int  NOT NULL ,
    PRIMARY KEY (
        `order_id`
    )
);

CREATE TABLE `OrderLine` (
    `order_line_id` int  NOT NULL AUTO_INCREMENT,
    `order_id` int  NOT NULL ,
    `product_id` int  NOT NULL ,
    `quantity` int  NOT NULL ,
    PRIMARY KEY (
        `order_line_id`
    )
);

CREATE TABLE `Product` (
    `product_id` int  NOT NULL AUTO_INCREMENT ,
    `name` varchar(45)  NOT NULL ,
    `description` longtext  NOT NULL ,
    `price` int  NOT NULL ,
    `brand` varchar(45)  NOT NULL ,
    `seller` varchar(45)  NOT NULL ,
    `stock` int  NOT NULL ,
    `link` varchar(180)  NOT NULL ,
    `category` varchar(45) NOT NULL , 
    PRIMARY KEY (
        `product_id`
    ),
    CONSTRAINT `uc_Product_name` UNIQUE (
        `name`
    )
);

CREATE TABLE `OrderStatus` (
    `order_status_id` int  NOT NULL AUTO_INCREMENT ,
    -- Finished etc
    `Status` varchar(45)  NOT NULL ,
    PRIMARY KEY (
        `order_status_id`
    ));


ALTER TABLE `Order` ADD CONSTRAINT `fk_Order_user_id` FOREIGN KEY(`user_id`)
REFERENCES `User` (`user_id`);

ALTER TABLE `Order` ADD CONSTRAINT `fk_Order_order_status_id` FOREIGN KEY(`order_status_id`)
REFERENCES `OrderStatus` (`order_status_id`);

ALTER TABLE `OrderLine` ADD CONSTRAINT `fk_OrderLine_order_id` FOREIGN KEY(`order_id`)
REFERENCES `Order` (`order_id`);

ALTER TABLE `OrderLine` ADD CONSTRAINT `fk_OrderLine_product_id` FOREIGN KEY(`product_id`)
REFERENCES `Product` (`product_id`);

CREATE INDEX `idx_User_name`
ON `User` (`name`);

