const express = require('express')

var app = express()

app.get('/',(req, res)=>{
    res.send('Hi, im vishwa')
})

app.listen(8080, ()=>{
    console.log(`running at %d}`,8080)
})