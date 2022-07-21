const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

var cors = require("cors");
app.use(cors());

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse request data content type application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
// import user routes
const userRoutes = require("./src/routes/user.routes");
//import realEstate routes
const realEstateRoutes = require("./src/routes/realEstate.routes");
//create user routes
app.use("/api/user", userRoutes);
//create realEstate routes
app.use("/api/realEstate", realEstateRoutes);
app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});
