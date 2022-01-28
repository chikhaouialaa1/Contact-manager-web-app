const express= require("express") ;
const User = require("../model/userSchema");
const ADMIN = require("../model/adminModel")


const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require('nodemailer');
const middlewares=require("../middleware/user-midlewares");
const SECRET_KEY=process.env.SECRET_KEY
router.use(express.json())
const admin_middleware = require("../middleware/admin-middleware")

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
          { admin_id: user._id, email,role:user.role },
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
//  router.get("/user-id/:id",admin_middleware.isAdmin, async (req,res)=> {
router.get("/user-id/:id",admin_middleware.isAdmin, async (req,res)=> {
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


//test_api
router.get("/test",async(req, res)=>{
    ADMIN.create(  {
        email:"root",
        password:await bcrypt.hash("root", 10)      
        })
    res.send(await ADMIN.find({})).status(200)
})

module.exports = router ;