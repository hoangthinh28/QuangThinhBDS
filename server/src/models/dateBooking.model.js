var dbConn = require("../../config/db.config");
// const user = require('../models/user.model');
var BookingTable = function (realEstate) {
  this.RealEstateTitle = realEstate.RealEstateTitle;
  this.RoomCode = realEstate.RoomCode;
  this.Address = realEstate.Address;
  this.imgURL = realEstate.imgURL;
  this.Price = realEstate.Price;
  this.Checkint = realEstate.Checkint;
  this.Checkout = realEstate.Checkout;
  this.RealEstateId = realEstate.RealEstateId;
  this.ethAddress = realEstate.ethAddress;
};

//get all realestate
BookingTable.getAllBooking = (result) => {
  dbConn.query("SELECT * FROM bookingtable", (err, res) => {
    if (err) {
      console.log("Error while fetching bookingtable", err);
      result(null, err);
    } else {
      console.log("Bookingtable fetched successfully");
      result(null, res);
    }
  });
};

// get realestate by ID from BD
BookingTable.getBookingTableByETH = (id, result) => {
  dbConn.query(
    "SELECT * FROM bookingtable where ethAddress = ? order by BookingID DESC",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching Booking by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//create new user
BookingTable.createBookingTable = (realEstateReqData, result) => {
  //select * from bookingtable	where Checkint = ? and Checkout = ?
  //if exist => return;
  //else
  dbConn.query(
    "INSERT INTO BookingTable SET ?",
    realEstateReqData,
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
      } else {
        console.log("BookingTable data created successfully");
        dbConn.query(
          "UPDATE realestate SET countBooked=countBooked + 1 WHERE RealEstateId= ?",
          [realEstateReqData.a]
        );
        result(null, res);
      }
    }
  );
};

//query checkin, checkout
BookingTable.getDate = (Title, result) => {
  dbConn.query(
    "select Checkint, Checkout from BookingTable where RealEstateId = ?",
    Title,
    (err, res) => {
      if (err) {
        console.log("Error while fetching Booking by Title", err);
        result(null, err);
      } else {
        console.log("BookingTable data fetch successfully");
        result(null, res);
      }
    }
  );
};

BookingTable.getRealEstateId = (RealEstateId, result) => {
  dbConn.query(
    "SELECT * FROM bookingtable where RealEstateId =? and isPaymented = 0",

    RealEstateId,

    (err, res) => {
      if (err) {
        console.log("Error while fetching Booking by RealestateId", err);

        result(null, err);
      } else {
        console.log("BookingTable data fetch successfully");

        result(null, res);
      }
    }
  );
};

BookingTable.updateIsPaymented = (RealEstateId, result) => {
  dbConn.query(
    "UPDATE bookingtable SET isPaymented = 1 where RealEstateId = ?",
    [RealEstateId],
    (err, res) => {
      if (err) {
        console.log("Errorr while updating isPaymented for bookingtable");
        result(null, err);
      } else {
        console.log("Bookingtable updated isPaymented successfully");
        result(null, res);
      }
    }
  );
};

module.exports = BookingTable;
