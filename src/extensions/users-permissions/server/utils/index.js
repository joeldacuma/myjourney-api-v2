'use strict';
const _ = require('lodash');

const getService = name => {
  return strapi.plugin('users-permissions').service(name);
};

const removeFields = (entity, fields) => {
  let objectEntries = [];

  Object.entries(entity).forEach(entry => {
    const [ key, value ] = entry;
    const sanitizedValue = _.omit(value, fields);
    objectEntries.push(sanitizedValue);
  });


  return objectEntries;
};

module.exports = {
  getService,
  removeFields
};