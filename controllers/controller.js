const mongooose = require('mongoose');

module.exports.test =(req, res) => {
    res.send("working");
};

module.exports.createUser = (req, res) => {
    res.send("create user");
};

