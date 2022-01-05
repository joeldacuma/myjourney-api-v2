const _ = require('lodash');
const utils = require('@strapi/utils');
const { convertPopulateQueryParams } = require('@strapi/utils/lib/convert-query-params');
const { getService } = require('../utils');
const { validateCreateUserBody, validateUpdateUserBody } = require('./validation/user');

const { sanitize } = utils;
const { ApplicationError, ValidationError } = utils.errors;

const sanitizeOutput = (user, ctx) => {
  const schema = strapi.getModel('plugin::users-permissions.user');
  const { auth } = ctx.state;

  return sanitize.contentAPI.output(user, schema, { auth });
};

module.exports = {
    /**
   * Retrieve user records.
   * @return {Object|Array}
   */
     async find(ctx) {
        const users = await getService('user').fetchAll(
          ctx.query.filters,
          convertPopulateQueryParams(ctx.query.populate || {})
        );
          
        console.log(users);
        ctx.body = await Promise.all(users.map(user => sanitizeOutput(user, ctx)));
      },
    
   /**
   * Retrieve a user record.
   * @return {Object}
   */
  async findOne(ctx) {
    const { id } = ctx.params;
    let data = await getService('user').fetch(
      { id },
      convertPopulateQueryParams(ctx.query.populate || {})
    );

    console.log(data);

    if (data) {
      data = await sanitizeOutput(data, ctx);
    }

    ctx.body = data;
  },
}