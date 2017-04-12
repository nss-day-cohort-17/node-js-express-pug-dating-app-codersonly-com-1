'user';

const { bookshelf } = require("../db/database")
const { compare } = require("bcryptjs")

const User = bookshelf.Model.extend({
  tableName: "users"
})

// const User = bookshelf.Model.extend(
//   { tableName: "users",
//   bcrypt: { field: "password"},
//   comparePass: function(passwordStr) {
//     return compare(passwordStr, this.attributes.password);
//   }
// }, {
//   findOneByEmail: function (email) {
//     return this.forge({email})
//     .fetch()
//     .then((user)=>{
//       return user;
//     })
//     .catch(()=>{
//       return null
//     })
//   }
// })
//
module.exports = User;
