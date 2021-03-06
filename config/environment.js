/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'out-of-the-water',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.Host = "http://localhost:3000";
    ENV.Namespace = "api/v1";
    ENV.FullPath = "http://localhost:3000/api/v1"
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.Host = "http://localhost:3000";
    ENV.Namespace = "api/v1";
    ENV.FullPath = "http://localhost:3000/api/v1"
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.Host = "https://out-of-the-water-api.herokuapp.com";
    ENV.Namespace = "api/v1";
    ENV.FullPath = "https://out-of-the-water-api.herokuapp.com/api/v1"
  }

  return ENV;
};
