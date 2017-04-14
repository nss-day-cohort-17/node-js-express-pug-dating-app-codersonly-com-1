'use strict';

const User = require("../models/users")

module.exports.render = (req, res) => {
  res.render("register", {page: "Register"});
}

// User.forge().query({where: {id: 12}}).fetchAll()
// .then(models => {
//   models.forEach(model => console.log(model.toJSON()))
// })



// User.collection().fetch().then(function (collection) {
//   console.log(collection)
// })

module.exports.create = ({body: {email, password, confirmation}}, res)=> {
  console.log({body: {email, password, confirmation}})
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then((user)=>{
      if(user) {
        console.log("email is registered")
        return res.render("register", {msg: "Email is already registered"});
      }
      console.log('making a user')
      // return User.forge({email, password})
      // id, name, email, password, profile_pic, gender, sexyLanguage, location, macOrPc, birthday, aboutUser
      return User.forge({email: email, password: password})
      .save()
      .then( ()=> {
        console.log('did it work?')
        res.redirect("/")
      })
      // .catch((err)=>res.render("register", {msg: "An error has occured, please try again."}))
      .catch((err)=> console.log('save didnt work'))
    })
    .catch((err)=> res.render("register", {msg: "An error has occured, please try again."}))
  } else {
    res.render("register", {msg: "Password and confirmation don\'t match. Try again"})
  }
}
