const express = require ('express')
const path = require('path')

const route = express.Router();
const contactus_cntroller = require('../controllers/contactus_controllers')

route.get('/contactus',contactus_cntroller.contactus_cntroller)

module.exports=route;

