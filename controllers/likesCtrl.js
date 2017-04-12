'use strict';

const Like = require("../models/liked.js")

module.exports.render = (req, res) => {
  res.render('likes')
}

Like.forge().fetchAll()
.then(models => {
  models.forEach(model => console.log(model.toJSON()))
})
