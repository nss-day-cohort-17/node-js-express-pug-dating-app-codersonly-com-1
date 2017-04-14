'use strict';

const port = process.env.PORT || 8081;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const { knex } = require('./db/database');

const routes = require('./routes')

// Set Pug as template engine
app.set('view engine', 'pug');

app.locals.errors = {};
app.locals.body = {};


// Middleware
app.use(cookieParser('secretsession'))
app.use(session({cookie: {maxAge: 70000}, secret: 'secretsession', resave: true, saveUninitialized: false}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: 'secretsession'
}))

// Use passport for auth
require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())


// app.use( (req, res, next) => {
//   app.locals.email = req.user && req.user.email
// })

app.use(express.static('public'));
app.use(routes)

// If route doesn't exist redirect to login
app.use( (req, res) => {
  res.render('login')
})



// app.use((err, { method, url, headers: { 'user-agent': agent } }, res, next) => {
//   if (process.env.NODE_ENV === 'production') {
//     res.sendStatus(err.status || 500)
//   } else {
//     // Send the stack trace as a response, for debugging purposes
//     res.set('Content-Type', 'text/plain').send(err.stack)
//   }

//   const timeStamp = new Date()
//   const statusCode = res.statusCode
//   const statusMessage = res.statusMessage

//   console.error(
//     `[${timeStamp}] "${red(`${method} ${url}`)}" Error (${statusCode}): "${statusMessage}"`
//   )
//   console.error("Oh, crud!!!!!", err.stack)
// });



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
