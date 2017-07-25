

var express =require('express')
var app=express()
var routes=require('./routes/carRoute')
var bodyParser = require('body-parser')
var cors=require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)

app.listen(3000)
