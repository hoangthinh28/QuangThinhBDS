const RealEstateModel = require('../models/realEstate.model');

//get all user list
exports.getRealEstateList = (req, res) => {
    // console.log('here all user list');
    RealEstateModel.getAllRealEstate((err, realEstate) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('User', realEstate);
        res.send(realEstate)

    })
}

// get realestate 
exports.getRealEstateByID = (req, res) => {
    // console.log('get user by id');
    RealEstateModel.getRealEstateByID(req.params.id, (err, realEstate) => {
        if (err)
            res.send(err);
        console.log('single user data', realEstate);
        res.send(realEstate);
    })
}


//create new user
exports.createNewRealEstate = (req, res) => {
    const realEstateReqData = new RealEstateModel(req.body);
    console.log('ealEstateReqData', realEstateReqData);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        RealEstateModel.createRealEstate(realEstateReqData, (err, realEstate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'RealEstate Created Successfully', data: realEstate.insertId })

        })
    }
}

//update realestate
exports.updateRealEstate = (req, res) => {
    const realEstateReqData = new RealEstateModel(req.body);
    console.log('realestateReqData update', realEstateReqData);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        RealEstateModel.updateRealEstate(req.params.id, realEstateReqData, (err, realEstate) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'RealEstate updated Successfully' })

        })
    }
}
//delete user
exports.deleteRealEstate = (req, res) => {
    RealEstateModel.deleteRealEstate(req.params.id, (err, realEstate) => {
        if (err)
        res.send(err);
        res.json({success:true, message:'RealEstate deleted successfully!'});
    })
}