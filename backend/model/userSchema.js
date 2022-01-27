const mongoose = require("mongoose");

userSchema=mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
    ,
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
    },
    tel : {
      type:Number,
      required: false,
  },
  salary:{
      type:Number,
      required: false,
      },
 post:{
      type:String,
      required: false,
  },
  suppliers:{
    type:String,
    required: false,
  },
  address:{
    type:String,
    required: false,
  },

    
})


module.exports=User=(mongoose.model('usercollection', userSchema));

















