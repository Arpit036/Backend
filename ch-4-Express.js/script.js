const express = require('express')
const app = express()

app.get('/', function(req , res) {
    res.send('Hello Arpit')
})

app.get('/Hello', function(req , res) {
    res.send('Hello    ')
})

app.get('/About', function(req , res) {
    res.send('About    ')
})

app.get('/contact', function(req , res) {
    res.send('contact    ')
})

app.listen(3000)