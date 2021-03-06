const fs = require('fs')
const http=require('http')



const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')
const app = express();

// app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname,'../','public')))
const contact = require('./contactus.js')
const admin = require('./admin.js')
const success = require('./sucess.js')
const shop = require('./shop.js')

app.use(admin)
app.use(contact)
app.use(success)
app.use(shop)


const server = http.createServer(app)

server.listen(4000,"localhost",()=>{
    console.log("listening");
})