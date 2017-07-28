
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
routes.post('/cars/' , function(request,response){
  var body = request.body


  if (body.condition.trim() === '' || body.color.trim() === ''  || body.price.trim() === ''  || isNaN(body.price) ||
      body.make_year.trim() === ''  || isNaN(body.make_year) || body.model.trim() === '' || body.options .trim() === '') {
      response.send("incorrect input")
  }
  else {
    queries.insertCar(body).then(function(data){
      response.send("Car inserted successfully")
    })
  }

})
routes.put('/cars/:id' , function(request,response){
  var body=request.body
  var id = request.params.id
  if (body.condition.trim() === '' || body.color.trim() === ''  || body.price.trim() === ''  || isNaN(body.price) ||
      body.make_year.trim() === ''  || isNaN(body.make_year) || body.model.trim() === '' || body.options .trim() === '') {
      response.send("incorrect input")
  }
  else {
    queries.updateCar(body,id).then(function(data){
      response.json("Car updated successfully")
    })
  }

})

module.exports=routes
