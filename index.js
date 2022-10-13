const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database');

const routings = require('./routes/route');

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', routings);

app.listen(port, ()=>{console.log("listening on port " + port)});

module.exports = app;