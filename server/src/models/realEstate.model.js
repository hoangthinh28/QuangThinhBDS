var dbConn = require("../../config/db.config");
// const user = require('../models/user.model');
var RealEstate = function (realEstate) {
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
// update real estate
RealEstate.updateRealEstate = (RealEstateId, realEstateReqData, result) => {
  dbConn.query(
    "UPDATE realestate SET Title=?,RoomCode=?, Price=?, Location=?, Address=?, Direct=?, Floor=?, imgURL=?, Area=?, Toilet=?, People=?, Detail=?, Building=?, CreateAt=?, UserId=? WHERE RealEstateId= ?",
    [
      realEstateReqData.Title,
      realEstateReqData.RoomCode,
      realEstateReqData.Price,
      realEstateReqData.Location,
      realEstateReqData.Address,
      realEstateReqData.Direct,
      realEstateReqData.Floor,
      realEstateReqData.imgURL,
      realEstateReqData.Area,
      realEstateReqData.Toilet,
      realEstateReqData.People,
      realEstateReqData.Detail,
      realEstateReqData.Building,
      realEstateReqData.CreateAt,
      realEstateReqData.UserId,
      RealEstateId,
    ],
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

module.exports = RealEstate;
