'use strict';

const User = require("../models/users")

module.exports.render = (req, res) => {
  res.render('profile')
}
