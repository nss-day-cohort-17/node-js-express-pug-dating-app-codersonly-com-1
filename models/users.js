'user';

const { bookshelf } = require("../db/database")
const { compare } = require("bcryptjs")

const User = bookshelf.Model.extend({
  tableName: "users"
})

module.exports = User;
