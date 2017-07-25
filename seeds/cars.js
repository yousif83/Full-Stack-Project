
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "car"; ALTER SEQUENCE car_id_seq RESTART WITH 1;')
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {model: 'bmw x5', condition: 'used', color: 'red', options: 'full', price: '10000', make_year: '2012'},
        {model: 'honda civic', condition: 'new', color: 'red', options: 'full', price: '11000', make_year: '2017'},
        {model: 'toyota corolla', condition: 'new', color: 'green', options: 'full', price: '15000', make_year: '2017'},
        {model: 'jeep liberty', condition: 'used', color: 'blue', options: 'full', price: '7000', make_year: '2010'},
        {model: 'honda accura', condition: 'used', color: 'black', options: 'full', price: '9000', make_year: '2015'}
      ]);
    });
};
