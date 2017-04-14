'use strict';

const passport = require("passport");

module.exports.render = (req, res) => {
  res.render('login', {page: 'Login'})
}


// My version

module.exports.login = (req, res, next) => {

  console.log("create function called in sessionCtrl")
  passport.authenticate('local', (err, user, msg) => {
    if (err) return next(err)
    if (!user) return res.render('login', {page: 'Login', msg})
    console.log('user object??', user)
    req.login(user, (err) => {
      console.log('login func user', user)
      if (err) return next(err)
        res.redirect('/home')
    })
  // })
  })(req, res, next)  // what is this doing?
}


// module.exports.create = (req, res, next) =>
//   passport.authenticate('local', (err, user, msg) => {
//     if (err) return next(err)
//     if (!user) return res.render('login', {page: "Login", msg} )

//     req.login(user, (err) => {
//       if (err) return next(err)
//       res.redirect('/')
//     })
//   })(req, res, next)
