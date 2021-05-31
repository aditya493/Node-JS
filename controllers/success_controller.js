const path = require('path')
exports.success_cntroller=(req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'success.html'))   
   }
