const express= require("express") ;
app=express();

const bodyParser = require("body-parser");

app.use(express.json())
require('dotenv').config()


var dbconnect=require("./config/database")

const user_app=require("./routes/user-routes")
app.use(user_app)


const admin_urls= require("./routes/admin-routers")
app.use(admin_urls)


app.listen(process.env.PORT,()=>{
    console.log("this serveur is runing on port",process.env.PORT)
})
