import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider, Registration, ThemeProvider, Amplify } from '@notes/components';
import Config from 'react-native-config';

const userPoolId = Config.AWS_COGNITO_USER_POOL_ID ?? '';
const userPoolClientId = Config.AWS_COGNITO_USER_POOL_CLIENT_ID ?? '';

if (!userPoolId || !userPoolClientId) {
  console.warn(
    'Missing AWS Cognito env vars. Set AWS_COGNITO_USER_POOL_ID and AWS_COGNITO_USER_POOL_CLIENT_ID in apps/aws-amplify-cognito/.env.'
  );
}

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId,
      userPoolClientId,
    },
  },
});

export const App = () => {
  const scheme = useColorScheme();
  return (
    <ThemeProvider defaultTheme={scheme}>
      <StatusBar barStyle="dark-content" />
      <AuthProvider>
        <Registration />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
