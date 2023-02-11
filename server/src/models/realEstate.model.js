var dbConn = require("../../config/db.config");
// const user = require('../models/user.model');
var RealEstate = function (realEstate) {
  this.RealEstateId = realEstate.RealEstateId;
  this.Title = realEstate.Title;
  this.RoomCode = realEstate.RoomCode;
  this.Price = realEstate.Price;
  this.Location = realEstate.Location;
  this.Address = realEstate.Address;
  this.Direct = realEstate.Direct;
  this.Floor = realEstate.Floor;
  this.MaxRoom = realEstate.MaxRoom;
  this.imgURL = realEstate.imgURL;
  this.Area = realEstate.Area;
  this.Toilet = realEstate.Toilet;
  this.People = realEstate.People;
  this.Detail = realEstate.Detail;
  this.Building = realEstate.Building;
  this.CreateAt = new Date();
  this.ethAddress = realEstate.ethAddress;
  this.countBooked = 0;
};

//get all realestate
RealEstate.getAllRealEstate = (result) => {
  dbConn.query("SELECT * FROM realestate", (err, res) => {
    if (err) {
      console.log("Erro while fetching realEstate", err);
      result(null, err);
    } else {
      console.log("User fetched successfully");
      result(null, res);
    }
  });
};

// get realestate by ID from BD
RealEstate.getRealEstateByID = (id, result) => {
  dbConn.query(
    "SELECT * FROM realestate WHERE RealEstateId = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching realestate by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

RealEstate.getRealEstateByETH = (id, result) => {
  dbConn.query(
    "SELECT * FROM realestate WHERE ethAddress = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching realestate by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//create new user
RealEstate.createRealEstate = (realEstateReqData, result) => {
  dbConn.query(
    "INSERT INTO realestate SET ?",
    realEstateReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data");
        result(null, err);
      } else {
        console.log("RealEstate created successfully");
        result(null, res);
      }
    }
  );
};

// update countBooked real estate
RealEstate.updateRealEstate = (RealEstateId, result) => {
  dbConn.query(
    "UPDATE realestate SET countBooked=countBooked + 1 WHERE RealEstateId= ?",
    [RealEstateId],
    (err, res) => {
      if (err) {
        console.log("Errorr while updating the user");
        result(null, err);
      } else {
        console.log("RealEstate updated successfully");
        result(null, res);
      }
    }
  );
};

//update countViewed real estate
RealEstate.updateViewedRealEstate = (RealEstateId, result) => {
  dbConn.query(
    "UPDATE realestate SET countViewed=countViewed + 1 WHERE RealEstateId= ?",
    [RealEstateId],
    (err, res) => {
      if (err) {
        console.log("Errorr while updating the user");
        result(null, err);
      } else {
        console.log("RealEstate updated viewed successfully");
        result(null, res);
      }
    }
  );
};

//delete user
RealEstate.deleteRealEstate = (id, result) => {
  dbConn.query(
    "DELETE FROM realestate WHERE RealEstateId=?",
    [id],
    (err, res) => {
      if (err) {
        console.log("Error while deleting the realestate");
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//get most booked top 3
RealEstate.getTop3BookedRealEstate = (result) => {
  dbConn.query(
    "SELECT * from realestate order by countBooked DESC limit 3",
    (err, res) => {
      if (err) {
        console.log("Error while fetching top 3 booked realEstate", err);
        result(null, err);
      } else {
        console.log("User fetched top 3 booked successfully");
        result(null, res);
      }
    }
  );
};

//get most viewed top 3
RealEstate.getTop3ViewedRealEstate = (result) => {
  dbConn.query(
    "SELECT * from realestate order by countViewed DESC limit 3",
    (err, res) => {
      if (err) {
        console.log("Error while fetching top 3 viewed realEstate", err);
        result(null, err);
      } else {
        console.log("User fetched top 3 viewed successfully");
        result(null, res);
      }
    }
  );
};

module.exports = RealEstate;
