const http= require('http');
const express = require('express');
const { nextTick } = require('process');
const app=express()


app.use((req,res,next)=>{
    console.log("middleware")
    next();
})

app.use((req,res,nxt)=>{
    console.log("middleware2")
    // res.send("<h1>hello</h1>")
    res.send( { key1:"1"});    
})


const server = http.createServer(app)

server.listen(4000,"localhost",()=>{
    console.log("listening");
})
