const env = process.env.NODE_ENV || "development";
const config = require("../knexfile.js")[env];
const knex = require("knex")(config);
const bookshelf = require("bookshelf")(knex);

bookshelf.plugin(require("bookshelf-bcrypt"));

module.exports = { knex, bookshelf }             
