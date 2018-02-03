module.exports = () => ({
  entry: './src/index.js',
  dist: './dist',
  html: {
    title: 'faviator',
    description: 'A simple easy favicon generator.',
    favicon: 'static/favicon.png',
    pkg: {}, // All package.json data
  },
});
