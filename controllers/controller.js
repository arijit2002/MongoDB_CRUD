const mongooose = require('mongoose');
const User = require('../model/user');

module.exports.test =(req, res) => {
    res.send("working");
};

module.exports.createUser = async (req, res) => {
    const { first_name, last_name, city } = req.body;
    await new User({first_name,last_name,city}).save();
    res.send("create user");
};

module.exports.getUsers = async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
};