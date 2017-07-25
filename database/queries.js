var knex=require('../connection')



module.exports={
carTable: function (){
  return knex('car')

},
carsById: function (id){
  return knex('car')
         .where('id',id)


}
,
deleteCarsById: function (id){
  return knex('car')
         .where('id',id)
         .del()


}
}
