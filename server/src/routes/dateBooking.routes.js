const express = require("express");
const router = express.Router();

const dateBookingController = require("../controllers/dateBooking.controller");

// get all realestate
router.get("/", dateBookingController.getDateBookingList);
// get realestate by ID
router.get("/:id", dateBookingController.getDateBookingByID);

// // create new realestate
router.post("/", dateBookingController.createNewDateBooking);

// // update realestate
// router.put('/:id', dateBookingController.updateRealEstate);

// //delete user
// router.delete('/:id', dateBookingController.deleteRealEstate);

module.exports = router;
