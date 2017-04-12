'use strict';


const User = require("../models/users")

// module.exports.render = (req, res) => {
//   res.render("register", {page: "Register"});
// }

User.forge().fetchAll()
.then(models => {
  models.forEach(model => console.log(model.toJSON()))
})

module.exports.render = (req, res) => {
  res.render('home')
}
