const mongooose = require('mongoose');

module.exports.test =(req, res) => {
    res.send("working");
};

module.exports.createUser = (req, res) => {
    const { first_name, last_name, city } = req.body;
    console.log(req.body);
    res.send("create user");
};

