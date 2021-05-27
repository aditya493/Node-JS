const express = require ('express')

const route = express.Router();


route.use('/product',(req,res,next)=>{
    res.send("this is shop")
    
    console.log("test")
    res.redirect("/");

})

module.exports=route