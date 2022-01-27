const mongoose = require("mongoose");

userSchema=mongoose.Schema({
    email :
    {
        type:String,
        required: true
    },
    password :
    {
        type:String,
        required: true
    },
    role :
    {
        type:String,
        required: false,
    }
    
})


module.exports=User=(mongoose.model('usercollection', userSchema));

















