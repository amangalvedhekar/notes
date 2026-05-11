/// <reference types="jest" />
/// <reference types="node" />
const { createReactNativeJestConfig } = require('../../jest.base.cts');

module.exports = {
  ...createReactNativeJestConfig(__dirname),
  displayName: '@notes/aws-amplify-cognito',
  coverageDirectory: '../../coverage/apps/aws-amplify-cognito',
};
