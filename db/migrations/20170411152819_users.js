exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", (table)=>{
    table.increments()
    table.string("name").notNullable()
    table.string("email").notNullable()
    table.string("password").notNullable()
    table.string("gender").notNullable()
    table.string("sexyLanguage").notNullable()
    table.string("location").notNullable()
    table.string("macOrPc").notNullable()
    table.string("birthday").notNullable()
    table.string("aboutUser").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable("users")
};
