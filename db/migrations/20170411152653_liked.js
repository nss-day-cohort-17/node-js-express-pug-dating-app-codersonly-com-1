
exports.up = function(knex, Promise) {
  return knex.schema.createTable("liked", (table)=> {
    table.increments()
    table.integer("user_id").references("users.id")
    table.integer("like_id").references("users.id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable("liked")
};
