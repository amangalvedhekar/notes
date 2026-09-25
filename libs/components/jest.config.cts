/// <reference types="jest" />
/// <reference types="node" />
const { createReactNativeJestConfig } = require('../../jest.base.cts');

module.exports = {
  ...createReactNativeJestConfig(__dirname),
  displayName: '@amangalvedhekar/components',
  coverageDirectory: '../../coverage/libs/components',
};
