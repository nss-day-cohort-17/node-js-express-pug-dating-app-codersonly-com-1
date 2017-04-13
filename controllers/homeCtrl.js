'use strict';


const User = require("../models/users")

module.exports.render = (req, res) => {
  User.forge().fetchAll()
  .then( (models) => {

    // map over array to return a new array with just json
    let modelsArray = models.map(model => model.toJSON())

    res.render('home', {page: 'Home', modelsArray })

  })
}

// 'use strict';


// const User = require("../models/users")

// module.exports.render = (req, res) => {
// <<<<<<< display_users
//   User.forge().fetchAll()
//   .then( (models) => {

//     // map over array to return a new array with just json
//     let modelsArray = models.map(model => model.toJSON())
// =======
//   res.render("register", {page: "Register"});
// }

// // User.forge().fetchAll()
// // .then(models => {
// //   models.forEach(model => console.log(model.toJSON()))
// // })

// // User.forge().query({where: {gender: "Female"}}).fetchAll()
// // .then(models => {
// //   models.forEach(model => console.log(model.toJSON()))
// // })

// // User.forge().query({where: {gender: "Male"}}).fetchAll()
// // .then(models => {
// //   models.forEach(model => console.log(model.toJSON()))
// // })
// >>>>>>> dev-main

//     res.render('home', {page: 'Home', modelsArray })

//   })
// }
