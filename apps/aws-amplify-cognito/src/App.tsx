import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider, Registration, ThemeProvider, Amplify } from '@amangalvedhekar/components';
import Config from 'react-native-config';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const fallbackSafeAreaMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, right: 0, bottom: 0, left: 0 },
};

const userPoolId = Config.AWS_COGNITO_USER_POOL_ID ?? '';
const userPoolClientId = Config.AWS_COGNITO_USER_POOL_CLIENT_ID ?? '';
const hasCognitoConfig = Boolean(userPoolId && userPoolClientId);

if (!hasCognitoConfig) {
  console.warn(
    'Missing AWS Cognito env vars. Set AWS_COGNITO_USER_POOL_ID and AWS_COGNITO_USER_POOL_CLIENT_ID in apps/aws-amplify-cognito/.env.'
  );
} else {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId,
        userPoolClientId,
      },
    },
  });
}

export const App = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics ?? fallbackSafeAreaMetrics}
    >
      <ThemeProvider defaultTheme={scheme}>
        <StatusBar barStyle="dark-content" />
        <AuthProvider>
          <Registration />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
