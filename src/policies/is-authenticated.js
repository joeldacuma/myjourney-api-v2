
module.exports = (ctx, next) => {
  const { params } = ctx;
  
  if (ctx.state.user.userId === params.userId) {
    return next();
  } else {
    return ctx.unauthorized();
  }
};