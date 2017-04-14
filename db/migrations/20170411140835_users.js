
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments()
    table.string("name")
    table.string("email").notNullable()
    table.string("password").notNullable()
    table.string("profile_pic")
    table.string("gender")
    table.string("sexyLanguage")
    table.string("location")
    table.string("macOrPc")
    table.string("birthday")
    table.string("aboutUser")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("users")
};
