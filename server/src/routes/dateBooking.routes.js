const express = require("express");
const router = express.Router();

const dateBookingController = require("../controllers/dateBooking.controller");

// get all realestate
router.get("/", dateBookingController.getDateBookingList);
// get realestate by ID
router.get("/date/:id", dateBookingController.getDateBookingByID);

router.get("/date/booking/:id", dateBookingController.getDateBookingByTitle);

router.get(
  "/date/bookingre/:id",
  dateBookingController.getDateBookingByRealEstateId
);

// // create new realestate
router.post("/", dateBookingController.createNewDateBooking);

router.post("/paymented/:id", dateBookingController.updateIsPaymented);

// // update realestate
// router.put('/:id', dateBookingController.updateRealEstate);

// //delete user
// router.delete('/:id', dateBookingController.deleteRealEstate);

module.exports = router;
