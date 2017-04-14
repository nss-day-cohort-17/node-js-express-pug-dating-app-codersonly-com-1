'use strict';

const port = process.env.PORT || 8081;

const express = require('express');
const app = express();

const bodyParser = require('body-Parser');
const passport = require('passport');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session)
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const { knex } = require('./db/database');
const routes = require('./routes');


//pug configuration for the view engine
app.set('view engine', 'pug');


app.use(cookieParser('secretecoders'));
app.use(session({cookie:{maxAge: 6000}, secret: 'secretcoders'}))
app.use(flash())
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'secret'
}))

require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next)=> {
  app.locals.email = req.user && req.user.email
  next()
})
//must be placed after sessions
app.use(express.static('public'));
//access to all the routes and middlewares
app.use(routes)

app.use((err, {method, url, headers: {'user-agent': agent}}, res, next)=>{
  if (process.env.NODE_ENV === 'production') {
    res.sendStatus(err.status || 500)
  } else {
    res.set('Content-type', 'text/plain').send(err.stack)
  }

  const timeStamp = new Date()
  const statusCode = res.statusCode
  const statusMessage = res.statusMessage

})
////******END OF MIDDLEWARES *****/////

const port = process.evn.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
