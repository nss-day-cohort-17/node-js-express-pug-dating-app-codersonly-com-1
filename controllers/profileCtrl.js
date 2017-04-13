'use strict';

const User = require("../models/users")

module.exports.render = (req, res) => {
  // get routeParam userId
  User.forge().query({where: {id: req.params.userId}}).fetch()
  .then( (user) => {
    let userInfo = user.toJSON()
    res.render('profile', { page: 'Profile', userInfo })
  })

}

// get id
