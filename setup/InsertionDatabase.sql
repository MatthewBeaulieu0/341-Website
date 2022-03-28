INSERT INTO `product` (`Name`,`Description`,`Price`,`Brand`,`Seller`,`Stock`, `Link`,`Category`)
VALUES
  ("Banana","yellow fruit",0.99,"Fake Amazon", "Fake Amazon",5, "/assets/images/banana.jpeg, /assets/images/banana1.jpeg","Food"),
  ("Calculator","math tools",39.99,"CASIO", "Fake Amazon",20, "/assets/images/calculator.jpeg" ,"Electronic"),
  ("Chocolate","tasty chocolate",3.98,"Kit Kat", "Fake Amazon",30, "/assets/images/chocalate.jpeg","Food"),
  ("Strawberry","red fruit", 4.99,"Fake Amazon", "South American Business ",6272, "/assets/images/strawberry.jpeg","Food" ),
  ("Bookshelf","wooden object that can hold books",249.99,"Fake Amazon", "Costco",29, "/assets/images/bookshelf.jpeg","Furniture"),
  ("Phone","Electrical device that allows you to complete several tasks", 599.99,"Amazon", "Fake Amazon",92933, "/assets/images/phone.jpeg","Electronic");


INSERT INTO `User` (`Name`,`password`, `seller`,`age`,`email`,`address`)
VALUES
  ("root", "root", TRUE, 45, "root@gmail.com", "NotHome");

INSERT INTO `orderstatus` (`Status`)
VALUES
  ("Notdelivered");
INSERT INTO `order` (`user_id`,`total_amount`,`order_status_id`)
VALUES
  (1,100,1);
INSERT INTO `orderline` (`order_id`,`product_id`,`quantity`)
VALUES
  (1,1,5);
  