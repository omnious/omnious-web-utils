// Global import
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

function getEnvOrDefault(key, defaultVal) {
  if (!process.env[key]) {
    if (typeof defaultVal === 'undefined') {
      console.error(`WARNING: Missing ENV var ${key}`);
    } else {
      process.env[key] = defaultVal;
    }
  }

  return process.env[key];
}

const env = getEnvOrDefault('NODE_ENV', 'development');
const configValue = {
  // base env
  base: {
    env,
    CDN_URL: getEnvOrDefault('CDN_URL', ''),
    FACEBOOK_ID: getEnvOrDefault('FACEBOOK_ID', ''),
    GOOGLE_ID: getEnvOrDefault('GOOGLE_ID', 'UA-XXXXX-Y')
  },
  production: {
    tag: getEnvOrDefault('CIRCLE_TAG', 'prod')
  },
  development: {
    host: getEnvOrDefault('HOST', 'localhost'),
    port: getEnvOrDefault('PORT', 3000)
  },
  test: {}
};
const config = { ...configValue.base, ...configValue[env] };

module.exports = config;
