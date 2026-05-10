declare module 'react-native-config' {
  export interface NativeConfig {
    AWS_COGNITO_USER_POOL_ID?: string;
    AWS_COGNITO_USER_POOL_CLIENT_ID?: string;
  }

  const Config: NativeConfig;
  export default Config;
}
