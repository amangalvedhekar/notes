/// <reference types="jest" />
/// <reference types="node" />
const { createReactNativeJestConfig } = require('../../jest.base.cts');
const baseConfig = createReactNativeJestConfig(__dirname);

module.exports = {
  ...baseConfig,
  displayName: '@notes/aws-amplify-cognito',
  coverageDirectory: '../../coverage/apps/aws-amplify-cognito',
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^@amangalvedhekar/components$':
      '<rootDir>/../../libs/components/src/index.ts',
    '^@amangalvedhekar/test-ids$': '<rootDir>/../../libs/test-ids/src/index.ts',
  },
};
