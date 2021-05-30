const express = require ('express')
const path = require('path')

const route = express.Router();


route.get('/contactus',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'contactus.html'))   
   })


module.exports=route;

