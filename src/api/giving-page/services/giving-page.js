'use strict';

/**
 * giving-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::giving-page.giving-page');
