


module.exports = {
  routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/organisations/:aliasId', 
        handler: 'organisation.findOne',
      },
    ]
};