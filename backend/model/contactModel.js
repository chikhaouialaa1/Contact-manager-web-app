const mongoose = require("mongoose");

userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email :
        {
            type:String,
            required: true
        },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    created_at    : { 
        type: Date, required: true, 
        default: Date.now 
    }


})


module.exports=User=(mongoose.model('contact_collection', userSchema));

















