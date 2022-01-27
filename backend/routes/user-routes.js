const express= require("express") ;
const User = require("../model/userSchema");
const Contact = require("../model/contactModel");
const Employee = require("../model/employeeModel");


const router = express.Router();
require("dotenv").config();
const nodemailer = require('nodemailer');
const SECRET_KEY=process.env.SECRET_KEY
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

router.use(express.json())

//signup_client_API
router.post("/client/signup",async (req,res)=>{
  
   try {
   const { name, email,tel,address,password,role } = req.body;

   if (!(email && password && name && role )) {
    res.status(400).send("All input is required");
  }

  const oldUser = await User.findOne({ email });

  console.log(oldUser)

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
    encryptedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    role,
    password: encryptedPassword,
    tel,
    address
  });
  const token = jwt.sign(
    { user_id: user._id, email,role:user.role },
    SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  user.token = token;

  res.status(201).json(token);
} catch (err) {
  console.log(err);
}
})


//signup_employee_API
router.post("/employee/signup",async (req,res)=>{
  
  try {
  const { name, email,password,address,role,tel,salary,post } = req.body;

  if (!(email && password && name && role )) {
   res.status(400).send("All input is required");
 }

 const oldUser = await User.findOne({ email });

 console.log(oldUser)

 if (oldUser) {
   return res.status(409).send("User Already Exist. Please Login");
 }
   encryptedPassword = await bcrypt.hash(password, 10);

 const user = await User.create({
   name,
   email: email.toLowerCase(),
   tel,
   salary,
   post,
   role,
   address,
   password: encryptedPassword,
 });
 const token = jwt.sign(
   { user_id: user._id, email,role:user.role },
   SECRET_KEY,
   {
     expiresIn: "2h",
   }
 );
 user.token = token;

 res.status(201).json(token);
} catch (err) {
 console.log(err);
}
})


//signup_client_API
router.post("/supplie/signup",async (req,res)=>{
  
  try {
  const { name,email, password,role,tel,address,supplies } = req.body;

  if (!(email && password && name && role )) {
   res.status(400).send("All input is required");
 }

 const oldUser = await User.findOne({ email });

 console.log(oldUser)

 if (oldUser) {
   return res.status(409).send("User Already Exist. Please Login");
 }
   encryptedPassword = await bcrypt.hash(password, 10);

 const user = await User.create({
  name,
  email: email.toLowerCase(),
  tel,
  role,
  address,
  supplies,
  password: encryptedPassword,
 });
 const token = jwt.sign(
   { user_id: user._id, email,role:user.role },
   SECRET_KEY,
   {
     expiresIn: "2h",
   }
 );
 user.token = token;

 res.status(201).json(token);
} catch (err) {
 console.log(err);
}
})



//signin_API
router.post("/user/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
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


module.exports = router ;

/*
router.get('/vaccinations',async function(req, res){
  try{
    const centreList=await centre.find({})
    return  res.send(centreList).status(200)

  }
  catch{return res.send("error").status(500)}

});



router.post('/vaccination',middlewares.verifyjwt,middlewares.isUser, function(req, res){
  try{
      const token = req.headers['authorization']
      dcodedToken = jwt.verify(token,process.env.SECRET_KEY);
      userid=dcodedToken.user_id

      var user =  User.findById({_id:userid });
      var {governementId,vaccinationCenterId}=req.body
      
      const confirmationUsers = ConfirmationUsers.create({
        userid,
        governementId,
        vaccinationCenterId,
        Date:"Selected Date by admin"
      
      })

      return  res.send("confirmationUsers done").status(200)

  }
  catch{return res.send("invalid token").status(401)}

  });

router.post("/register",async (req,res)=>{
  console.log("tesst")

   try {
   const { first_name, last_name, email, password } = req.body;

   if (!(email && password && first_name && last_name)) {
    res.status(400).send("All input is required");
  }

  const oldUser = await User.findOne({ email });

  console.log(oldUser)

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
    encryptedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    first_name,
    last_name,
    email: email.toLowerCase(),
    password: encryptedPassword,
  });

  confirmationcoode= randomInteger(0,9999).toString()
  iduser=user._id


  const confirmationuser = await confirmation.create({
    confirmationId:confirmationcoode,
    userid:iduser
  });

  emailSenderFunction(confirmationcoode,user.email)

  const token = jwt.sign(
    { user_id: user._id, email,activation:user.active,role:user.role },
    SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  user.token = token;

  res.status(201).json(token);
} catch (err) {
  console.log(err);
}

})

router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email,activation:user.active,role:user.role },
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
try{
      if (!user.active) {
          let userid=user._id
          userConfirmation=confirmation.findOne({userid})

          if(userConfirmation){
          return  res.send({"token":token,message:"confirmation code already sent , please activate your account !"})
            .status(200);  
          }

          else{
            confirmationcoode= randomInteger(0,9999).toString()
            userConfirmation.set({confirmationId:confirmationcoode})
            userConfirmation.save()
            emailSenderFunction(confirmationcoode,user.email)
          res.send("needed confirmation \n please check your email box !","\n token:",token)
          .status(200);
  

          }
        }
      }
      catch{
        return res.send("invalid token").status(401);
      }

      // user
      return  res.status(200).send(token).redirect("/home");
    }

    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

router.post("/account/validation",middlewares.verifyjwt, async (req, res) => {
  const token = req.headers['authorization']
  dcodedToken = jwt.verify(token,process.env.SECRET_KEY);
  userid=dcodedToken.user_id
  var user = await User.findById({_id:userid });
  try{
  if(!user.active){
    try{
      confirmationCode=confirmation.findOne({userid: userid},(err,data)=>{
        console.log("data",data)

        if(data===null){
          let code=randomInteger(1,9999).toString()
          emailSenderFunction(code)

          const confirmationuser = confirmation.create({
            confirmationId:code,
            userid:dcodedToken.user_id
          });
        
          return res.send("expired secret code , please retry again").status(403)
        }

        if(data.confirmationId===req.body.CODE){
          user["active"]=true
          User.updateOne({ _id:userid},user)
          user.save()
          confirmation.deleteOne({userid:userid},(err)=>console.log("error",err))
          return res.send("your account has been activated sccessfully").status(200)
        }
        else  return res.send("bad secret code, please try again !!").status(401)
      
        })
    }
    catch(e) {console.log(e)}
  }
  else{
    return res.redirect("/vaccination")
  }
}
catch{return res.send("invalid token").status(401)}


})

  
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emailSenderFunction(message,target){
  const transporter = nodemailer.createTransport({
    port: 465,               
    host: "smtp.gmail.com",
      auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
         }
        ,
    secure: true,
    });


  const mailData = {
    from: 'chikhaouiaalaa1@gmail.com',  
      to: target,   
      subject: 'EVAX CODE',
      text: 'EVAX CODE',
      html:"<h4>Le code expire au bout de 10 minutes. </h4><br><h5> EVAX CODE : "+message+"</h5>"
    };


transporter.sendMail(mailData, function (err, info) {
if(err)
    console.log(err)
else
    console.log(info);
});
}
*/
