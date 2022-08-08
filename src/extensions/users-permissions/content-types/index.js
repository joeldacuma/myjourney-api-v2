'use strict'

const role = require('./role');
const user = require('./user');

module.exports =  {
  role: { schema: role },
  user: { schema: user }
};
