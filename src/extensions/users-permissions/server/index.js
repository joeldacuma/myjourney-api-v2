const contentTypes = require('./content-types');
const services = require('./services');
const routes = require('./routes');

module.exports = () => ({
  contentTypes,
  services,
  routes
});