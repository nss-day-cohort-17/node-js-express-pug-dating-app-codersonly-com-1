'use strict';

const port = process.env.PORT || 8081;

const express = require('express');
const app = express();



app.set('view engine', 'pug');


app.use(express.static('public'));



app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
