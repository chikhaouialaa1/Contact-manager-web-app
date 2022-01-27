const express= require("express") ;
const User = require("../model/userSchema");
const confirmation = require("../model/conifmrationSchema");
const ConfirmationUsers = require("../model/confirmedUsersSchema");
const vaccinesSchema = require("../model/VaccinesSchema");
const Operator = require("../model/OperatorSchema");
const VaccinesSchema = require("../model/VaccinesSchema");
const centre = require("../model/vaccinationCentreSchema");




const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require('nodemailer');

const middlewares=require("../middleware/user-midlewares");
const Centre = require("../model/vaccinationCentreSchema");


const SECRET_KEY=process.env.SECRET_KEY
router.use(express.json())


router.get('/vaccination-list',middlewares.isOperator, function(req, res){
    ConfirmationUsers.find({},(err,data)=> {
        console.log(data)
        return res.send(data).status(200)
    });
});



router.post('/jpo',middlewares.isOperator,  async function(req, res){
    const token = req.headers['authorization']
    dcodedToken = jwt.verify(token,process.env.SECRET_KEY);
    console.log(dcodedToken)


    try{

const{userId,vaccineId}=req.body

console.log("1***",userId)
console.log("2***",vaccineId)

ConfirmationUsers.findOne({ userId },(err,data)=>{
    console.log(data)
    data["validated"]=true
    console.log("3***",data)

    ConfirmationUsers.updateOne({userid:userId},{
        userid:data.userid,
        governementId:data.governementId,
        vaccinationCenterId:data.vaccinationCenterId,
        Date:data.Date,
        validated:data.validated,
    }).then(console.log("user updated successfully + vaccin" )).catch((e)=>{ console.log("upload error",e) })
});

const vaccine = vaccinesSchema.findOne({_id:vaccineId},(err,data)=>{
    console.log("4***>>>>>>>>>",data)

    User.findOne({ userId },(err,userdata)=>{
        console.log("userId",userId)
        console.log("userdata",userdata)
        if(userdata.vaccine==='-') {
            console.log("aaaaaaaaaaaaaaaaaa")

              User.updateOne({"_id":userId},{
                  vaccine:data.vaccineName,
                   },
              res.send("user vaccine updated successfully").status(200).end()
              ,(err)=>{
                  if(err) console.log(err)
                    return res.send({message:"error :"+err})
              })

        }

    });


    })

}
catch{
    return res.status(401)
}

});

