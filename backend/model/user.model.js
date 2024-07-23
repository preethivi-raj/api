const mongoose = require("mongoose")


const userSchema  = mongoose.Schema({
    username : {
        type :String 
    },
    email : {
        type : String
    },
    gender : {
        type : String
    },
    bio :{
        type : String
    }
} , {timeseries : true})


const User  = mongoose.model("User" , userSchema)

module.exports = User;