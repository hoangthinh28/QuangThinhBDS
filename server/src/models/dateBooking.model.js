var dbConn = require("../../config/db.config");
// const user = require('../models/user.model');
var BookingTable = function (realEstate) {
  this.RealEstateTitle = realEstate.RealEstateTitle;
  this.RoomCode = realEstate.RoomCode;
  this.Address = realEstate.Address;
  this.imgURL = realEstate.imgURL;
  this.Price = realEstate.Price;
  this.datesBooked = realEstate.datesBooked;
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
BookingTable.getBookingTableByID = (id, result) => {
  dbConn.query(
    "SELECT * FROM BookingTable WHERE BookingID = ?",
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
  dbConn.query(
    "INSERT INTO BookingTable SET ?",
    realEstateReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting booking data");
        result(null, err);
      } else {
        console.log("BookingTable data created successfully");
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
