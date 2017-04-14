'user';

const { bookshelf } = require("../db/database")
const { compare } = require("bcryptjs")

const User = bookshelf.Model.extend({
    tableName: "users",
    bcrypt: { field: 'password'},

    comparePass: function (passwordStr) {
      console.log('password string from user', passwordStr)
      console.log('user', this.attributes)
      // return compare(passwordStr, this.attributes)
      return compare(passwordStr, this.attributes.password)
    }
  }, {
    findOneByEmail: function(email) {
      return this.forge({email})
      .fetch()
      .then( (user) => {
        console.log('Got user', user.get('email'))
        return user
      })
      .catch( () => {
        console.log('No email exists')
        return (null)
      })
    }
});

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
