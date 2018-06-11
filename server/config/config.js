module.exports = {
    development: {
      username: 'postgres',
      password: null,
      database: 'transfeera_development',
      host: '127.0.0.1',
      dialect: 'postgres',
      port: 5432
    },
    test: {
      username: 'postgres',
      password: null,
      database: 'transfeera_test',
      host: '127.0.0.1',
      dialect: 'postgres',
      logging: false,
      port: 5432
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      dialect: 'postgres'
    }
};