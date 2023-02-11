const dateBookingModel = require("../models/dateBooking.model");

//get all user list
exports.getDateBookingList = (req, res) => {
  // console.log('here all user list');
  dateBookingModel.getAllBooking((err, realEstate) => {
    console.log("Date Booking are here");
    if (err) res.send(err);
    console.log("Booking: ", realEstate);
    res.send(realEstate);
  });
};

// get realestate
exports.getDateBookingByID = (req, res) => {
  // console.log('get user by id');
  dateBookingModel.getBookingTableByETH(req.params.id, (err, realEstate) => {
    if (err) res.send(err);
    console.log("Single booking data: ", realEstate);
    res.send(realEstate);
  });
};

//create new user
exports.createNewDateBooking = (req, res) => {
  const dateBoookingReqData = new dateBookingModel(req.body);
  console.log("dateBoookingReqData ", dateBoookingReqData);
  //check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    dateBookingModel.createBookingTable(
      dateBoookingReqData,
      (err, realEstate) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "DateBooking Created Successfully",
          data: realEstate.insertId,
        });
      }
    );
  }
};

// get realestate
exports.getDateBookingByTitle = (req, res) => {
  // console.log('get user by id');
  dateBookingModel.getDate(req.params.id, (err, realEstate) => {
    if (err) res.send(err);
    console.log("Single booking date data: ", realEstate);
    res.send(realEstate);
  });
};

exports.getDateBookingByRealEstateId = (req, res) => {
  dateBookingModel.getRealEstateId(req.params.id, (err, realEstate) => {
    if (err) res.send(err);

    console.log("Single booking date data: ", realEstate);

    res.send(realEstate);
  });
};

exports.updateIsPaymented = (req, res) => {
  dateBookingModel.updateIsPaymented(req.params.id, (err, realEstate) => {
    if (err) res.send(err);
    res.json({
      status: true,
      message: "RealEstate updated isPaymented Successfully",
    });
  });
};
