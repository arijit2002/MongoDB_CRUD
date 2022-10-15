const mongooose = require('mongoose');
const User = require('../model/user');


module.exports.createUser = async (req, res) => {
    const { first_name, last_name, city } = req.body;
    const newUser = await new User({first_name,last_name,city}).save();
    res.status(201).send(newUser);
};

module.exports.getUsers = async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
};

module.exports.getUserById = async (req, res) => {
    const id = req.body.id;
    const userPresent = await User.findById(id);
    if(userPresent!=null) {res.send(userPresent);}
    else res.send({"message":"user not present"});
};

module.exports.deleteUserById = async (req, res) => {
    const id = req.body.id;
    const userPresent = await User.findByIdAndRemove(id);
    if(userPresent!=null) {res.send({"message":"user deleted"});}
    else res.send({"message":"user not present"});
};

module.exports.updateUserById = async (req, res) => {
    const id = req.body.id;
    if(User.findById(id)!=null) {
        await User.findByIdAndUpdate(id, {$set:req.body});
        res.send("User updated successfully");
    }else{res.send("User not found");}
};