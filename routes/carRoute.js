var express =require('express')
var routes=express.Router()
var queries=require('../database/queries')
routes.get('/cars' , function(request,response){
  queries.carTable().then(function(data){
    response.json(data)
  })
})

routes.get('/cars/:id' , function(request,response){
  var id = request.params.id
  queries.carsById(id).then(function(data){
    response.json(data)
  })
})
routes.delete('/cars/:id' , function(request,response){
  var id = request.params.id
  queries.deleteCarsById(id).then(function(data){
    response.json("Car Deleted successfully")
  })
})

module.exports=routes
