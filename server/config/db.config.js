const mysql = require("mysql");

// create here mysql connection

const dbConn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: "3306",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
