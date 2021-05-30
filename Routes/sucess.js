const express = require ('express')
const path = require('path')

const route = express.Router();


route.use('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'success.html'))
    
})

module.exports=route;