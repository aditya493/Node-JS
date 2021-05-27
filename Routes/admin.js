const express = require ('express')

const route = express.Router();


route.get('/add-product',(req,res,next) => {
    res.send('<body><form action="/product" method="POST"><input type="text" name="messege"><button type="submit">send</button></form></body>')
})

module.exports=route;