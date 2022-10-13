const mongooose = require('mongoose');

module.exports.test =(req, res) => {
    res.send("working");
};

const createUser = (req, res) => {
    res.send("create user");
};

