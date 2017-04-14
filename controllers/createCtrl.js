'use strict';

const User = require("../models/users")

module.exports.render = (req, res) => {
  res.render('createProfile')
}
module.exports.update = ({body: {name, profile_pic, gender, sexyLanguage, location, macOrPc, birthday, aboutUser}},res)=> {
new User({id:1}).save({name: name,
                      profile_pic: profile_pic,
                      gender: gender,
                      sexyLanguage: sexyLanguage,
                      location: location,
                      macOrPc: macOrPc,
                      birthday: birthday,
                      aboutUser: aboutUser
                        }, {patch: true})
                .then(function(model) {
                  console.log(model)
                })
              }
