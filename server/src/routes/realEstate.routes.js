const express = require('express');
const router = express.Router();

const realEstateController = require('../controllers/realEstate.controller');

// get all realestate
router.get('/', realEstateController.getRealEstateList);
// get realestate by ID
router.get('/:id', realEstateController.getRealEstateByID);

// // create new realestate
router.post('/', realEstateController.createNewRealEstate);

// update realestate
router.put('/:id', realEstateController.updateRealEstate);

//delete user
router.delete('/:id', realEstateController.deleteRealEstate);

module.exports = router;