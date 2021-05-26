const fs = require('fs')


const requestHandler = (req,res)=>{
  if (req.url== '/'){

      res.write('<html>')
      res.write('<head>')
      res.write('<title>my form </title>')
      
      
      res.write('<body><form action="/messege" method="POST"><input type="text" name="messege"><button type="submit">send</button></form></body>')
      
      res.write('</head>')
      res.write('</html>')
      fs.readFile("messege.text", (err,data) =>{
        if (err) return console.log(err);
        res.write(data.toString())
    })
      return res.end
  }

else if (req.url==='/messege'){
    const body = []
    req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk)
    })
    
    req.on('end',()=>{
        const parsebody = Buffer.concat(body).toString();
        console.log(parsebody)
        const messege = parsebody.split('=')[1]
        fs.writeFileSync("messege.text" ,messege)
        

    })
    
    res.statusCode=302;
    res.setHeader('location',"/")

    fs.readFile("messege.text", (err,data) =>{
        if (err) return console.log(err);
        return res.end(data.toString())
    })
}
    
}




module.exports = requestHandler;