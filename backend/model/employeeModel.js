const mongoose = require("mongoose");

employeeSchema=mongoose.Schema({
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
    phone : {
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
    }
    
})
module.exports=employee=(mongoose.model('employeecollection', employeeSchema));

















