const mongooose = require('mongoose');
const User = require('../model/user');

module.exports.test =(req, res) => {
    res.send("working");
};

module.exports.createUser = async (req, res) => {
    const { first_name, last_name, city } = req.body;
    console.log(req.body);
    await new User({first_name,last_name,city}).save();
    res.send("create user");
};

