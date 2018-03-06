const path = require('path');

module.exports = () => ({
  port: 8080,
  entry: './src/index.js',
  dist: './dist',
  html: {
    title: 'Faviator',
    description: 'A simple easy favicon generator.',
    favicon: 'static/favicon.png',
    template: path.join(__dirname, 'index.ejs'),
    pkg: {}, // All package.json data
  },
  transformModules: ['@faviator/create-svg-favicon'],
  webpack(config) {
    if (process.env.NODE_ENV !== 'production') {
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
