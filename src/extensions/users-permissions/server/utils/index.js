'use strict';
const _ = require('lodash');

const getService = name => {
  return strapi.plugin('users-permissions').service(name);
};

const removeFields = (entity, fields) => {
  Object.entries(entity).forEach(entry => {
    const [key, value ] = entry;
    console.log(value);
  });

  // return sanitizedValue;
};

module.exports = {
  getService,
  removeFields
};