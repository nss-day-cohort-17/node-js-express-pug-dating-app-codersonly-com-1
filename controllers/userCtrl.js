'use strict';

const User = require("../models/users")

module.exports.render = (req, res) => {
  res.render("register", {page: "Register"});
}


module.exports.create = ({body: {email, password, confirmation}}, res)=> {
  console.log({body: {email, password, confirmation}})
  if (password === confirmation) {
    User.findOneByEmail(email)
    .then((user)=>{
      if(user) return res.render("register", {msg: "Email is already registered"});
      return User.forge({
                        email,
                        password
                      })
      .save()
      .then( ()=> {
        res.redirect("/")
      })
      .catch((err)=>res.render("register", {msg: "An error has occured, please try again."}))
    })
    .catch((err)=> res.render("register", {msg: "An error has occured, please try again."}))
  } else {
    res.render("register", {msg: "Password and confirmation don\'t match. Try again"})
  }
}
