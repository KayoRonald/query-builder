// Update with your config settings.
// const path = require('node:path')
module.exports = {
  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      database: 'aakzyyao',
      user:     'aakzyyao',
      password: '1PiwXVw1LArTStl7_JcTNx6NlgmAXDhU',
      host: 'babar.db.elephantsql.com'
    },
    searchPath: ['knex', 'public'],
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};