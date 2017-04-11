'use strict';

const port = process.env.PORT || 8081;

const express = require('express');
const app = express();

const routes = require('./routes')

app.set('view engine', 'pug');


app.use(express.static('public'));
app.use(routes)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
