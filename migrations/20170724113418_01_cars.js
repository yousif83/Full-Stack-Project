
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', (table) => {
    table.increments()
    table.text('model').notNullable()
    table.text('condition')
    table.text('color').notNullable()
    table.text('options')
    table.float('price').notNullable()
    table.integer('make_year').notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('car')
};
