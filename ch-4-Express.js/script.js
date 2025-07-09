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

app.get('/profile', function(req , res, next) {
     return next(new Error("Something went wrong"))
})

// Error Handler- 
 app.use( (error, req, res, next )=> {
    console.error(error.stack)
    res.status(500).send('Something Broke')
 })
 

app.listen(3000)