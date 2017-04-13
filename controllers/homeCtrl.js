'use strict';


const User = require("../models/users")

module.exports.render = (req, res) => {
  res.render("register", {page: "Register"});
}

// User.forge().fetchAll()
// .then(models => {
//   models.forEach(model => console.log(model.toJSON()))
// })

User.forge().query({where: {gender: "Female"}}).fetchAll()
.then(models => {
  models.forEach(model => console.log(model.toJSON()))
})

User.forge().query({where: {gender: "Male"}}).fetchAll()
.then(models => {
  models.forEach(model => console.log(model.toJSON()))
})

module.exports.render = (req, res) => {
  res.render('home')
}
