var environment=process.env.NODE_ENV || 'development'
var knex=require('knex')
var config=require('./knexfile.js')[environment]
var carConfig=knex(config)

module.exports=carConfig
