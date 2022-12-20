'use strict';

/**
 * assembly router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::assembly.assembly');
