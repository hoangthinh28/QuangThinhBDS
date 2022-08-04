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
    "SELECT * FROM quangthinhbds.bookingtable where ethAddress = ? order by Checkint DESC",
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
          [realEstateReqData.RealEstateId]
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

// // update real estate
// BookingTable.updateBookingTable = (BookingID, realEstateReqData, result) => {
//   dbConn.query(
//     "UPDATE BookingTable SET RealEstateTitle=?,RoomCode=?, Address=?, imgURL=?, Address=?, Direct=?, Floor=?, imgURL=?, Area=?, Toilet=?, People=?, Detail=?, Building=?, CreateAt=?, datesBooked=?  ,UserId=? WHERE BookingID= ?",
//     [
//       realEstateReqData.RealEstateTitle,
//       realEstateReqData.RoomCode,
//       realEstateReqData.Address,
//       realEstateReqData.Location,
//       realEstateReqData.Address,
//       realEstateReqData.Direct,
//       realEstateReqData.Floor,
//       realEstateReqData.imgURL,
//       realEstateReqData.Area,
//       realEstateReqData.Toilet,
//       realEstateReqData.People,
//       realEstateReqData.Detail,
//       realEstateReqData.Building,
//       realEstateReqData.CreateAt,
//       realEstateReqData.datesBooked,
//       realEstateReqData.UserId,
//       BookingID,
//     ],
//     (err, res) => {
//       if (err) {
//         console.log("Errorr while updating the user");
//         result(null, err);
//       } else {
//         console.log("RealEstate updated successfully");
//         result(null, res);
//       }
//     }
//   );
// };

//delete user
// RealEstate.deleteRealEstate = (id, result) => {
//   dbConn.query(
//     "DELETE FROM realestate WHERE RealEstateId=?",
//     [id],
//     (err, res) => {
//       if (err) {
//         console.log("Error while deleting the realestate");
//         result(null, err);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };

module.exports = BookingTable;
