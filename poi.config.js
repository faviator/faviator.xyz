const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;

module.exports = () => ({
  entry: './src/index.js',
  dist: './dist',
  html: {
    title: 'faviator',
    description: 'A simple easy favicon generator.',
    favicon: 'static/favicon.png',
    pkg: {}, // All package.json data
  },
  webpack(config) {
    if(process.env.NODE_ENV === 'staging') {
      config.plugins.push(new RobotstxtPlugin({
        policy: [
          {
            userAgent: '*',
            disallow: '/',
          }
        ], 
      }))
    }
    return config;
  }
});
