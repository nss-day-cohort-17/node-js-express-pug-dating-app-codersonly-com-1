'use strict';

const { bookshelf } = require("../db/database")

const Liked = bookshelf.Model.extend({
  tableName: "liked"
})

module.exports = Liked;
