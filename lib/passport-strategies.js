'use strict';

const passport = require("passport");
const { Stretegy } = require("passport-local");
const { knex } = require("../database");

const User = require('../models/users');

passport.serializeUser((user, done)=>done(null, user.id))

passport.deserializeUser((id, done)=> {
  knex('user').where({id}).first()
  .then((user)=> {
    done(null, user);
  })
  .catch((err)=> {
    done(err, null);
  })
})

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
(email, passwordStr, done)=> {
  User.findOneByEmail(email)
  .then((user)=> {
    if(user) {
      return Promise.all([
        user,
        //compares user password
        user.comparePass(passwordStr)
      ])
    }
    done(null, null, {msg: 'Email does not exist'})
  })
  .then(([user, matches])=> {
    if (matches) {
      done(null, user, {msg: 'Successful log in'})
    } else {
      done(null, null, {msg: 'Password does not match'})
    }
  })
  .catch(done)
})

passport.use(localStrategy)
