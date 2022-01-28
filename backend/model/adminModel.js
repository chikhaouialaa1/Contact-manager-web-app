const mongoose = require("mongoose");

adminSchema=mongoose.Schema({
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
        default:"admin"
    }
    
})


module.exports=admin=(mongoose.model('admincollection',adminSchema));

















