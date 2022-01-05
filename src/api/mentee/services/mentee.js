'use strict';

/**
 * mentee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mentee.mentee');
