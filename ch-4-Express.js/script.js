const express = require('express')
const app = express()

//middleware- 
app.use(function(req, res, next){
  console.log("middleware worked")
  next();
});

app.get('/', function(req , res) {
    res.send('Hello Arpit')
})

 
 

app.listen(3000)