'use strict';

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
  },
  async getMyGroupsAsMember(ctx) {

    const { userId } = ctx.params;

    if (!ctx.state.user) {
      return ctx.unauthorized();
    }

    const response = await super.find(ctx);
    let filtered = [];
    const { data } = response;

    data.forEach(element => {
      const { id, attributes } = element;
      const { Members } = attributes;

      if (Members) {
        const { users_permissions_users } = Members;
        const memberGroup = users_permissions_users?.data.filter(user => {
          if (user.attributes.userId === userId) {
            filtered.push({id: element.id, attributes: element.attributes });
          }
        });
      }
    });
    
    return filtered;
  }
}));
