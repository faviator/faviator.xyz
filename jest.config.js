module.exports = {
  'moduleFileExtensions': [
    'js',
    'json',
    'vue',
  ],
  'transform': {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  'collectCoverage': true,
  'collectCoverageFrom': [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
  ],
  'coverageReporters': ['html', 'text-summary', 'lcov'],
  'mapCoverage': true,
  'snapshotSerializers': [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
  'moduleDirectories': ['node_modules'],
  'moduleNameMapper': {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
