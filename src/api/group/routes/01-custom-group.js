module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/groups/:userId', 
        handler: 'group.getMyGroupsAsMember',
      }
    ]
  }