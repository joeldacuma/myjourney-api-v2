module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d3cc6fbd8a1db3221133805f962030c'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT')
  }
});
