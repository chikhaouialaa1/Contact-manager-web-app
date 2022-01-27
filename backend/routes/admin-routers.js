const express= require("express") ;
const User = require("../model/userSchema");
//const ADMIN = require("../model/adminModel")


const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require('nodemailer');
const middlewares=require("../middleware/user-midlewares");
const SECRET_KEY=process.env.SECRET_KEY
router.use(express.json())



/*
router.post('/Vaccines-list',middlewares.isAdmin, function(req, res){
    try{
        var vaccine=req.body
        console.log(vaccine)
        VaccinesSchema.create(vaccine).then(()=>{
            return res.send("vaccine added successfully").status(200)
        })
        
    }
    catch
    {return res.send("vaccine added successfully").status(400)}
})



//creat new centre 
router.post('/new-vaccination-centre',middlewares.isAdmin, function(req, res){
    try{
        var centre=req.body
        console.log(centre)

        Centre.create(centre).then(()=>{
            return res.status(200).send("centre created successfully")
        })
    }
    catch
    {return res.send("error").status(400)}
})


//update centre
router.post('/Vaccination-centre-updated',middlewares.isAdmin, function(req, res){
    try{
        var centreId=req.body._id
        const {name,gouvernement,manager} = req.body
        console.log(centreId)
        Centre.updateOne({"_id":centreId},{
            name:name,
            gouvernement:gouvernement,
            manager:manager
        },
        res.send("centre updated successfully").status(200)
        ,(err)=>{
            if(err) console.log(err)
            return res.send({message:"error :"+err})
        })    
    }
    catch
    {return res.send("error").status(400)}
})

//delete centre
router.post('/Vaccination-centre-del',middlewares.isAdmin, function(req, res){
    try{
        var centreId=req.body._id
        console.log(centreId)
        Centre.deleteOne({"_id":centreId},
        ()=>{
        console.log(centreId)
            return res.send("centre" + centreId + "deleted successfully")
        }
        ,   
        (err)=>{
            if(err) console.log(err)
            return res.send({message:"error :"+err})
        })    
    }
    catch
    {return res.send("error").status(400)}
})

//check specific centre
 router.post('/Vaccination-centre-id',middlewares.isAdmin, function(req, res){
  //  try{
        var centreId=req.body._id
        console.log(centreId)
        try{

            Centre.find({_id : centreId},(err,data)=>{
                if(err){
                    return res.send("error").status(404)
                }
                console.log(data)
                return res.send(data).status(200)
                
            })

        }
        catch(err){
            console.log(err)
        }
})


//check all centres
router.get('/Vaccination-centre-list',middlewares.isAdmin, function(req, res){
    Centre.find({},(err,data)=> {
        return res.send(data).status(200)
    });
 
})

//create operator
router.post('/operator',middlewares.isAdmin, async function(req, res){

    const {username,password,centreId}=req.body
     encryptedPassword = await bcrypt.hash(password, 10);

    try{
        const oldOperator = await Operator.findOne({ username });

        if(oldOperator){
            return res.status(401).send("this operator is already exist")
        }
        else{
            await Operator.create({
            username:username,
            password:encryptedPassword,
            role:"operator",
            centreId:centreId
        }).then(()=>{
            return res.status(200).send("operator created successfully")
        })
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send("error , please verify your inputs")
    }
})

router.get('/operator',middlewares.isAdmin, function(req, res){
    try{
        Operator.find({},(err,data)=> {
            return res.send(data).status(200)
        });}
    catch(err){
        console.log(err)
        return res.status(500).send("error , please verify your inputs")
    }
})


//admin_signin_API
router.post("/login/admin", async (req, res) => {

    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await ADMIN.findOne({ email });
      if (user && user.role==="admin" && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email,role:user.role },
          SECRET_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        user.token = token;
  
        return  res.status(200).send(token).redirect("/home");
      }
      return res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });

*/
  
//getallusers
router.post("/users",async (req, res) => {
    const { Role } = req.body; 
    try {
      if (!Role) {
        const user = await User.find({}) 
        res.status(200).send(user);
      }
      if (Role==="client" || Role==="supplies" || Role==="employee") {
        const user = await User.find({role:Role}) 
        res.status(200).send(user);
      }
      else{
        res.status(400).send("All input is required");
      }
        return  res.status(200).send(token).redirect("/home");
      }
     catch (err) {
      console.log(err);
    }
  });

  //getbyid
  router.get("/user-id/:id", async (req,res)=> {
    var userId = req.params.id.toString();
    try{
        //res.send(userId).status(200)
        //res.send(jpoId).status(200)
        const user = await User.findOne({_id:userId})
        res.send(user).status(200)
    }
    catch(err){

    }
  })


    //deletebyid
    router.delete("/delete/user-id/:id", async (req,res)=> {
        var userId = req.params.id.toString();
        if(await User.findOne({_id:userId})){
            try{
                //res.send(userId).status(200)
                //res.send(jpoId).status(200)
                const user = await User.deleteOne({_id:userId})
                res.send(user).status(200)
            }
            catch(err){
                res.send("invalid user id").status(409)    
            }
        }
        else{
            res.send("user not found").status(409)    
        }
      })    


    //updatebyid
    router.put("/update/user-id/:id", async (req,res)=> {
        var userId = req.params.id.toString();
        const newuser = req.body
        if(User.findOne({_id:userId})){
            try{
                const user = await User.findOneAndUpdate(userId,newuser)
                res.send(user).status(200)
            }
            catch(err){
                res.send("invalid user id").status(409)    
            }
        }
        else{
            res.send("user not found").status(409)    
        }
      })    

module.exports = router ;