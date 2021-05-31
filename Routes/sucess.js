const express = require ('express')
const path = require('path')

const route = express.Router();
const success_cntroller = require('../controllers/success_controller')

route.use('/success',success_cntroller.success_cntroller)


module.exports=route;