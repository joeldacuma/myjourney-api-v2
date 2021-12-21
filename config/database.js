module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'journey-v2'),
      user: env('DATABASE_USERNAME', 'journey2'),
      password: env('DATABASE_PASSWORD', 'password123'),
      /*ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)
      }*/
    },
  },
});
