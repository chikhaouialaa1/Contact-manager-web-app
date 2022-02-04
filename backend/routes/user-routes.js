const express= require("express") ;
const User = require("../model/userSchema");
const router = express.Router();
require("dotenv").config();
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
