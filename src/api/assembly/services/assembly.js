'use strict';

/**
 * assembly service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::assembly.assembly');
