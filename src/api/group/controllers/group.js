'use strict';

/**
 * group controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::group.group', ({ strapi }) => ({
  async update(ctx) {
    const { body } = ctx.request;
    const { data } = body;

    if (!ctx.state.user) {
      return ctx.unauthorized();
    }

    if (ctx.state.user.id !== data.owner) {
        return ctx.unauthorized();
    }

    const response = await super.update(ctx);
    return response;
  }
}));
