
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments()
    table.string("name").notNullable()
    table.string("profile_pic").notNullable()
    table.string("sex_language").notNullable()
    table.string("computer_type").notNullable()
    table.string("password").notNullable()
    table.string("email").notNullable()
    table.string("about_user").notNullable()
    table.string("location").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("users")
};
