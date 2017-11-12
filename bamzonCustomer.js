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
  queryAllProducts();
});
inquirer.prompt([{

  name: 'product_name',
  message: 'What item would you like to purchase?'},
  {
    name:'quantity',
    message: 'How many would you like?'
  
}]).then (function(answer){
  console.log( answer.quantity  +  answer.product_name );
  connection.query('SELECT * FROM products WHERE ?',{product_name:answer.product_name},function(err, res){
    if(err)throw err;
  
    if(res[0].stock_quantity > answer.quantity) {
      var yourCost = answer.quantity * res[0].price
      console.log('Congradulations on your purchase! Your total is: ' + yourCost.toFixed(2));
      var newStock_quantity = res[0].stock_quantity - answer.quantity 
      connection.query('UPDATE products SET ? WHERE ?', [{stock_quantity:newStock_quantity},{product_name:answer.product_name}],
        function(err,res) {});
    } else {
      console.log('Sorry! we only have ' + res[0].stock_quantity + ' of those.' )
    }
    connection.end();
    });
});
function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log("        -----------------------------------");

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].product_id + " | " +"Item: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " +res[i].price + " | " + "Available: " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
  });
}

