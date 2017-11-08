DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
 product_id INTEGER(11) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 department_name VARCHAR(100) NOT NULL,
 price INTEGER(10,2) NOT NULL,
 stock_quantity INTEGER(11) NOT NULL,
 PRIMARY KEY (product_id)

	);
INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'MMA SHORTS','FIGHT_SHOP',25.00, 50);
INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'fishing pole','SPORT_SHOP',15.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,' walking shorts','MENS WEAR',35.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'wrist watch','JEWELRY',75.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'flip flops','SHOES',25.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'gummy worms','CANDY_SHOP',2.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'twix','CANDY_SHOP',2.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'rubber duck','PROGRMMING_SHOP',50.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'note book','SCHOOL_SUPPLIES',5.00, 50);

INSERT INTO bamazon_db( product_id, product_name, department_name, price, stock_quantity)
VALUES(1,'pen','SCHOOL_SUPPLIES',2.00, 50);
