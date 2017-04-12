
module.exports = {

 development: {
   client: 'postgresql',
   connection: {
     database: 'coders_only',
     user:     'postgres',
     password: 'postgres'
   },
   migrations: {
     directory: __dirname + '/db/migrations'
   },
   seeds: {
     directory: __dirname + '/db/seeds'
   }
 },

 staging: {
   client: 'postgresql',
   connection: {
     database: 'my_db',
     user:     'username',
     password: 'password'
   },
   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 },

 production: {
   client: 'postgresql',
   connection: {
     database: 'my_db',
     user:     'username',
     password: 'password'
   },
   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
   }
 }

};
