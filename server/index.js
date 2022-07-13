const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const Web3 = require("web3");
const bodyParser = require("body-parser");
const { recoverPersonalSignature } = require("eth-sig-util");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: "3306",
  password: "thinh28042001",
  database: "quangthinhbds",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected Database");
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
