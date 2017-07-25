var environment='development'
var knex=require('knex')
var config=require('./knexfile.js')[environment]
var carConfig=knex(config)

module.exports=carConfig
