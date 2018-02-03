module.exports = {
  'moduleFileExtensions': [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
  ],
  'transform': {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  'collectCoverage': true,
  'collectCoverageFrom': [
    '**/*.{js,vue}',
    '!**/node_modules/**',
  ],
  'coverageReporters': ['html', 'text-summary', 'lcov'],
  'mapCoverage': true,
  'snapshotSerializers': [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
};
