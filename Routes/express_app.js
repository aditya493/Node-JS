const fs = require('fs')
const http=require('http')


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded())

const admin = require('./admin.js')
const shop = require('./shop.js')

app.use(admin)

app.use(shop)

const server = http.createServer(app)

server.listen(4000,"localhost",()=>{
    console.log("listening");
})