// import '@testing-library/react-native/extend-expect';
jest.useFakeTimers();
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@aws-amplify/react-native', () => ({
  loadBase64: jest.fn().mockImplementation(() => ({
    encode: jest.fn(),
  })),
  loadGetRandomValues: jest.fn(),
  loadUrlPolyfill: jest.fn(),
  loadAsyncStorage: jest.fn(),
  loadAppState: jest.fn(() => ({
    addEventListener: jest.fn(),
  })),
}));

jest.mock('react-native-config', () => ({
  __esModule: true,
  default: {
    AWS_COGNITO_USER_POOL_ID: 'us-east-1_example',
    AWS_COGNITO_USER_POOL_CLIENT_ID: 'exampleclientid',
  },
}));
