'use strict';

const passport = require("passport");

module.exports.render = (req, res) => {
  res.render('login')
}

module.exports.create = (req, res, next) => {
  if(err) return next(err)
  if(!user) return res.render("login", {page: "Login", msg})

  req.login(user, (err)=> {
    if (err) return next(err)
    res.redirect("/")
  })
}
