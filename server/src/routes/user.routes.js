const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const realEstateController = require("../controllers/realEstate.controller");

// get all user
router.get("/", userController.getUserList);

//get top 3 booking
router.get("/topbooking", realEstateController.getTop3Booked);
router.get("/topview", realEstateController.getTop3Viewed);

// get user by ID
router.get("/address/:id", userController.getUserByID);

// create new user
router.post("/", userController.createNewUser);

// update user
router.put("/id/:id", userController.updateUser);

//delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
