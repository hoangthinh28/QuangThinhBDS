const express = require("express");
const router = express.Router();

const realEstateController = require("../controllers/realEstate.controller");

// get all realestate
router.get("/", realEstateController.getRealEstateList);
// get realestate by ID
router.get("/:id", realEstateController.getRealEstateByID);
router.get("/address/:id", realEstateController.getRealEstateByETH);

// // create new realestate
router.post("/", realEstateController.createNewRealEstate);

// update realestate
router.put("/:id", realEstateController.updateRealEstate);
router.put("/view/:id", realEstateController.updateCountedViewRealEstate);

//delete user
router.delete("/:id", realEstateController.deleteRealEstate);

module.exports = router;
