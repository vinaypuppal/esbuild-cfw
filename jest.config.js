module.exports = {
  verbose: true,
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  automock: false,
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testRegex: '/tests/.*\\.test\\.ts$',
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  watchPathIgnorePatterns: ['node_modules', 'dist'],
};
