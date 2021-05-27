const fs = require('fs')
const http=require('http')


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded())

app.use('/add-product',(req,res,next) => {
    res.send('<body><form action="/messege" method="POST"><input type="text" name="messege"><button type="submit">send</button></form></body>')
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    console.log("test")
    res.redirect("/");

})
app.use('/',(req,res,next) =>{
    res.send('this is home page')
})

const server = http.createServer(app)

server.listen(4000,"localhost",()=>{
    console.log("listening");
})
