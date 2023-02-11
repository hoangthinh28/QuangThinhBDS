const UserModel = require('../models/user.model');

//get all user list
exports.getUserList = (req, res) => {
    // console.log('here all user list');
    UserModel.getAllUser((err, user) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('User', user);
        res.send(user)

    })
}

// GET USER BY ID
exports.getUserByID = (req, res) => {
    // console.log('get user by id');
    UserModel.getUserByID(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        console.log('single user data', user);
        res.send(user);
    })
}


//create new user
exports.createNewUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        UserModel.createUser(userReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User Created Successfully', data: user.insertId })

        })
    }
}

//update user
exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        UserModel.updateUser(req.params.id, userReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User updated Successfully' })

        })
    }
}
//delete user
exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.id, (err, user) => {
        if (err)
        res.send(err);
        res.json({success:true, message:'User deleted successfully!'});
    })
}