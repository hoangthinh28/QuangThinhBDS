var dbConn = require("../../config/db.config");

var User = function (user) {
  this.Username = user.Username;
  this.Email = user.Email;
  this.Avatar = user.Avatar;
  this.ethAddress = user.ethAddress;
  this.CreateAt = new Date();
  this.isAdmin = user.isAdmin;
};

//get all user
User.getAllUser = (result) => {
  dbConn.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("Erro while fetching user", err);
      result(null, err);
    } else {
      console.log("User fetched successfully");
      result(null, res);
    }
  });
};

// get user by ID from BD
User.getUserByID = (ethAddress, result) => {
  dbConn.query(
    "SELECT * FROM user WHERE ethAddress = ?",
    ethAddress,
    (err, res) => {
      if (err) {
        console.log("Error while fetching user by ethAddress", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//create new user
User.createUser = (userReqData, result) => {
  dbConn.query("INSERT INTO user SET ?", userReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("User created successfully");
      result(null, res);
    }
  });
};

// update user
User.updateUser = (UserId, userReqData, result) => {
  dbConn.query(
    "UPDATE user SET Username=?, Email=?, Avatar=? WHERE ethAddress= ?",
    [userReqData.Username, userReqData.Email, userReqData.Avatar, UserId],
    (err, res) => {
      if (err) {
        console.log("Errorr while updating the user");
        result(null, err);
      } else {
        console.log("User updated successfully");
        result(null, res);
      }
    }
  );
};

//delete user
User.deleteUser = (id, result) => {
  dbConn.query("DELETE FROM user WHERE UserId=?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the user");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
