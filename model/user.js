const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        min:2,
    },
    last_name:{
        type:String,
        required:true,
        min:2,
    },
    city:{
        type:String,
        required:true,
        min:2,
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
});

module.exports = mongoose.model("user",userSchema);