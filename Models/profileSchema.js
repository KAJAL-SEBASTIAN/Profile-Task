const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
       username:{
        type:String,
        required:true
       },
        age:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        profileImage:{
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
    });
    
    const profiles = mongoose.model("profiles",profileSchema)
    
    module.exports = profiles