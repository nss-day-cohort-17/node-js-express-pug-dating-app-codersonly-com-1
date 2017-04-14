'use strict';

const Like = require("../models/liked.js")
const User = require("../models/users.js")

module.exports.render = (req, res) => {
  res.render('likes')
}

// Like.forge().fetchAll()
// .then(models => {
//   // models.forEach(model => console.log(model.toJSON()))
// })

// User.forge({email: 'test3333', password: 'test3333'})
// .save()
