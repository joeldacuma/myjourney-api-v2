'use strict';

/**
 *  organisation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::organisation.organisation', ({ strapi }) => ({
  async findOne(ctx) {
    const { aliasId } = ctx.params; 
    const { data, meta } = await super.find({aliasId: aliasId});

    return { data, meta };
  },
  })
);
