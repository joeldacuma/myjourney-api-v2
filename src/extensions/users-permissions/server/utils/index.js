'use strict';
const _ = require('lodash');

const getService = name => {
  return strapi.plugin('users-permissions').service(name);
};

const removeAuthorFields = entity => {
  const sanitizedValue = _.omit(entity, ['createdAt', 'updatedAt']);

  _.forEach(sanitizedValue, (value, key) => {
    if (_.isArray(value)) {
      sanitizedValue[key] = value.map(removeAuthorFields);
    } else if (_.isObject(value)) {
      sanitizedValue[key] = removeAuthorFields(value);
    }
  });

  return sanitizedValue;
};

module.exports = {
  getService,
  removeAuthorFields
};