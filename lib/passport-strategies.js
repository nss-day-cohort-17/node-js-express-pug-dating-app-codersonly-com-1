'use strict';

const passport = require("passport");
const { Strategy } = require("passport-local");
const { knex } = require("../db/database");


const User = require('../models/users')


// see joe's explanation in slack
passport.serializeUser( (user, done) => done(null, user.id))

passport.deserializeUser( (id, done) => {
  knex('users').where({id}).first() // change this to bookhself?
  .then( (user) => done(null, user))
  .catch( (err) => done(err, null))
})

// local stategy takes an object and a function
const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, passwordStr, done) => {
    console.log('using local strategy')
    console.log('email', email)
    console.log('passwordStr', passwordStr)
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) {
        return Promise.all([
            user,
            user.comparePass(passwordStr)
          ])
      }
      done( null, null, { msg: 'Email does not exist'})
    })
    .then( ([user, matches]) => {
      if (matches){
        done(null, user, {msg: 'Log in succesful'})
      } else {
        done(null, null, {msg: 'Password doesn\'t match'})
      }
    })
    .catch(done)
})

passport.use(localStrategy)
