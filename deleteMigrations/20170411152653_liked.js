
exports.up = function(knex, Promise) {
  return knex.schema.createTable("liked", (table)=> {
    table.increments()
    table.integer("user_id")
    table.integer("like_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("liked")
};
