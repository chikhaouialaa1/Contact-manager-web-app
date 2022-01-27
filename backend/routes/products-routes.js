const express= require("express") ;
const Product = require("../model/productsModel");
require("dotenv").config();
const router = express.Router();
router.use(express.json())


router.get("testapi",(req,res)=>{
    res.send("test")
})


//create new product
router.post("/product/create", async(req,res)=>{
    const { name,image_url,description,price } = req.body
    if(name&&image_url&&description&&price){
        try{
            await Product.create({
            name,
            image_url,
            description,
            price
          }).then(()=>{
              res.send("product added succefully")
            }
          ).catch(()=>{
              res.send("error")
            }
          )
        }
        catch (e){
            res.send("empty").status(400).end()
          }
    }
    else{
        res.send("empty").status(400)
    }
})

//get all products
router.get("/products", async(req,res)=>{
    try{
        const products= await Product.find({})
        res.send(products).status(200)
    }
    catch(e){
        res.status(400)
    }
})

//get specific product
router.post("/product", async(req,res)=>{
    try{
        const{id}=req.body    
        const product= await Product.findOne({_id:id})
        //res.send(product).status(200)
        res.send(product)
    }
    catch(e){
        res.status(400)
    }
})

//delete item
router.delete("/delete/product",async(req,res)=>{
    const{id}=req.body
    try{
        await Product.deleteOne({_id:id})
        res.status(200).end()
    }
    catch(e){
        res.status(400)
    }
})

//update item
router.put("/update/product",async(req,res)=>{
    const { _id,name,image_url,description,price } = req.body
    try{
        const updated_product = await Product.updateOne({_id:_id},{
            name:name,
            image_url:image_url,
            description:description,
            price:12
        }).then(
            res.send(updated_product).status(200).end()
        ).catch(e)
    }
    catch(e){
        res.status(400)
    }
})


module.exports = router ;
