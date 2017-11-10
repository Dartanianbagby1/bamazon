var mysql = require("mysql");
var inquirer = require('inquirer');




var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
  connection.end();
});
function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log("-----------------------------------");

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].product_id + " | " + res[i].product_name + " | " + res[i].department_name+ " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
}

