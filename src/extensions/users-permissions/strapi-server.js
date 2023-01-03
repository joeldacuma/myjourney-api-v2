module.exports = plugin => {
    const sanitizeOutput = (user) => {
      const {
        password, resetPasswordToken, confirmationToken, ...sanitizedUser
      } = user;
      return sanitizedUser;
    };
  
    plugin.controllers.user.me = async (ctx) => {
      if (!ctx.state.user) {
        return ctx.unauthorized();
      }

      const user = await strapi.entityService.findOne(
        'plugin::users-permissions.user',
        ctx.state.user.id,
        { populate: [
            'designation',
            'organisation',
            'position',
            'designation',
            'assembly',
            'location',
            'certification',
            'profileImage'
          ] 
        }
      );
    
      ctx.body = sanitizeOutput(user);
    };

    plugin.controllers.user.update = async (ctx) => {
        const { body } = ctx.request;
        const { id } = ctx.params;

        if (!ctx.state.user) {
          return ctx.unauthorized();
        }

        console.log(ctx.state.user.id)
        
        const user = await strapi.entityService.update(
          'plugin::users-permissions.user',
          ctx.state.user.id,
          { 
            data: body,
            populate: [
                'designation',
                'organisation',
                'position',
                'designation',
                'assembly',
                'location',
                'certification',
                'profileImage'
              ]
          }
        );
      
        ctx.body = sanitizeOutput(user);
      };
  
    // plugin.controllers.user.find = async (ctx) => {
    //     if (!ctx.state.user) {
    //         return ctx.unauthorized();
    //       }

    //   const users = await strapi.entityService.findMany(
    //     'plugin::users-permissions.user',
    //     { ...ctx.params, populate: ['profileImage'] }
    //   );
  
    //   ctx.body = users.map(user => sanitizeOutput(user));
    // };

    // plugin.controllers.user.findOne = async (ctx) => {

    //     const { id } = ctx.params;
    //     ctx.body = {};

    //     if (!ctx.state.user) {
    //       return ctx.unauthorized();
    //     }

    //     const user = await strapi.entityService.findOne(
    //       'plugin::users-permissions.user',
    //       id,
    //       { populate: ['profileImage'] }
    //     );
        

    //     if (user) {
    //       ctx.body = sanitizeOutput(user);
    //     }
    //   };
  
    return plugin;
  };
