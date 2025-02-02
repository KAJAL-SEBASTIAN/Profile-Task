const mongoose = require('mongoose')

//schema creation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});
//model - users(mongodb - collection)
const users = mongoose.model("users",userSchema)

module.exports=users