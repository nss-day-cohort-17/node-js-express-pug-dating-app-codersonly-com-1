'use strict';


const User = require("../models/users")

module.exports.render = (req, res) => {
  User.forge().fetchAll()
  .then( (models) => {

    // map over array to return a new array with just json
    let modelsArray = models.map(model => model.toJSON())

    res.render('home', {page: 'Home', modelsArray })

  })
}
