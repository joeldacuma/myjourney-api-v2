'use strict';

/**
 * yrock-config service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yrock-config.yrock-config');
