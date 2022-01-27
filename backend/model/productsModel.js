const mongoose = require("mongoose");

userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image_url: {
      type: String,
      required: true,
    }
    ,
    description :
    {
        type:String,
        required: true
    },
    price :{
        type:Number,
        required: true     
    },
    created_at    : { 
        type: Date, required: true, 
        default: Date.now 
    }
})


module.exports=User=(mongoose.model('product_collection', userSchema));

















