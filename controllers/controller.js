const mongooose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { response } = require('express');
require('dotenv').config();

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    if(!(email && password)) res.status(400).redirect('/user/login');
    else{
        const userPresent = await User.findOne({email});
        if(userPresent && await(bcrypt.compare(password,userPresent.password))){
            const token = jwt.sign(
                {user_id: userPresent.id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            )
            res.status(200).send({token:token});
        }
        response.status(400).redirect('/user/login');
    }
};

module.exports.createUser = async (req, res) => {
    const { email, password, first_name, last_name, city } = req.body;
    if(await User.findOne({email})) res.status(404).send({"message": "cannot create user with same email"});
    else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = await new User({email,password:hashedPassword,first_name,last_name,city}).save();
        res.status(201).send(newUser);
    }
};

module.exports.getAllUsers = async (req, res) => {
    const allUsers = await User.find();
    if(allUsers.length > 0) res.status(200).send(allUsers);
    else res.status(404).send({"message":"no users present"});
};

module.exports.getUserById = async (req, res) => {
    const id = req.body.id;
    const userPresent = await User.findById(id);
    if(userPresent != null) res.status(200).send(userPresent);
    else res.send({"message":"user with this id is not available"});
};

module.exports.getUserByEmail = async (req, res) => {
    const email = req.body.email;
    const userPresent = await User.find({email});
    if(userPresent.length > 0) res.status(200).send(userPresent);
    else res.send({"message":"user with this email is not available"});
};

module.exports.deleteAllUsers = async (req, res) => {
    const allUsers = await User.remove();
    res.status(200).send({"message":"All Users deleted"});
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
        res.send({"message":"User updated successfully"});
    }else res.send({"message":"User not found"});
};
