module.exports = () => ({
  entry: './src/index.js',
  dist: './dist',
  html: {
    title: 'Faviator',
    description: 'A simple easy favicon generator.',
    favicon: 'static/favicon.png',
    pkg: {}, // All package.json data
  },
  transformModules: ['@faviator/create-svg-favicon'],
  webpack(config) {
    if (process.env.NODE_ENV === 'staging') {
      const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
      config.plugins.push(new RobotstxtPlugin({
        policy: [
          {
            userAgent: '*',
            disallow: '/',
          },
        ],
      }));
    }
    return config;
  },
});
