'use strict';

/**
 * inquiry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inquiry.inquiry', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    
    if (response) {
      try {
      await strapi.plugins['email-designer'].service('email').sendTemplatedEmail(
        {
          to: strapi.config.server.sender
        },
        {
          templateReferenceId: 2
        }, 
        {
          user: {
            email: response.data.attributes.email,
            message: response.data.attributes.message
          }
        });
      } catch(error) {
        console.log(error);
      }
    }

    return response;
  }
}));
