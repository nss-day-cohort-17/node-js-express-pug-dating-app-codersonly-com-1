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


//test queries
// User.forge().query({where: {gender: "Female"}}).fetchAll()
// .then(models => {
//   models.forEach(model => console.log(model.toJSON()))
// })
//
// User.forge().query({where: {gender: "Male"}}).fetchAll()
// .then(models => {
//   models.forEach(model => console.log(model.toJSON()))
// })

// new User({id:1}).save({name: "Phillip Lewis",
//                       profile_pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Phill_Lewis_2007.jpg/1200px-Phill_Lewis_2007.jpg",
//                       gender: "Male",
//                       sexyLanguage: "java",
//                       location: "unknown",
//                       macOrPc: "Mac",
//                       birthday: "12/12/2121",
//                       aboutUser: "not much to know"
//                         }, {patch: true})
//                 .then(function(model) {
//                   console.log(model)
//                 })

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
