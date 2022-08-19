
module.exports =  plugin => {
    const sanitizeOutput = (user) => {
      const {
        password, resetPasswordToken, confirmationToken, ...sanitizedUser
      } = user; // be careful, you need to omit other private attributes yourself
      return sanitizedUser;
    };
  
    plugin.controllers.user.me = async (ctx) => {
      if (!ctx.state.user) {
        return ctx.unauthorized();
      }

      const user = await strapi.entityService.findOne(
        'plugin::users-permissions.user',
        ctx.state.user.id,
        { populate: ['profileImage'] }
      );
  
      ctx.body = sanitizeOutput(user);
    };
  
    plugin.controllers.user.find = async (ctx) => {
        if (!ctx.state.user) {
            return ctx.unauthorized();
          }

      const users = await strapi.entityService.findMany(
        'plugin::users-permissions.user',
        { ...ctx.params, populate: ['profileImage'] }
      );
      
      ctx.body = users.map(user => sanitizeOutput(user));
    };

    plugin.controllers.user.findOne = async (ctx) => {

        const { id } = ctx.params;
        ctx.body = {};

        if (!ctx.state.user) {
          return ctx.unauthorized();
        }

        const user = await strapi.entityService.findOne(
          'plugin::users-permissions.user',
          id,
          { populate: ['profileImage'] }
        );
        

        if (user) {
          ctx.body = sanitizeOutput(user);
        }
    };

    // plugin.controllers.role.find = async (ctx) => {
    //   const admin = ctx.state.user;
    //   const roles = await strapi.query('plugin::users-permissions.role').findMany({ sort: ['name'] });
    //   const newRoles = await roles.filter(role => role.type !== 'authenticated' && role.type !== 'public');

    //   ctx.body = {
    //       roles: (admin.roles[0].code !== 'strapi-super-admin') ? newRoles : roles
    //     };
    // };

    
    return plugin;
  };

