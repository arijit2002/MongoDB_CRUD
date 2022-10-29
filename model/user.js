const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
        min: 5,
        max: 100,
    },
    password: {
        type: String,
        required: true,
        min: 4,
    },
    first_name:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    last_name:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    city:{
        type:String,
        required:true,
        min:2,
        max:60,
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
});

module.exports = mongoose.model("user",userSchema);