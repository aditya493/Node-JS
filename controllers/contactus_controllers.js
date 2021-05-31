
const path = require('path')
exports.contactus_cntroller=(req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'contactus.html'))   
   }
