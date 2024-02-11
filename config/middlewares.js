module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com', "cdn.jsdelivr.net", "strapi.io", "s3.amazonaws.com"],
          'media-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com'],
          'script-src': ["'self'", "editor.unlayer.com"],
          'frame-src': ["'self'", "editor.unlayer.com"],
          upgradeInsecureRequests: null,
        },
      },  
    },
  },
  'strapi::cors',
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'My Journey Limited'
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
