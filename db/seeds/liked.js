
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('liked').del()
    .then(function () {
      // Inserts seed entries
      return knex('liked').insert([
        {id: 1, user_id: 6, like_id: 1},
        {id: 2, user_id: 7, like_id: 2},
        {id: 3, user_id: 8, like_id: 3},
        {id: 4, user_id: 9, like_id: 4},
        {id: 5, user_id: 10, like_id: 5}
      ]);
    });
};
