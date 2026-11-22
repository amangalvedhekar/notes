import React, { useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import {
  Amplify,
  AuthProvider,
  OneTimePassword,
  Registration,
  ThemeProvider,
  YStack,
} from '@amangalvedhekar/components';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

type RootStackParamList = {
  Registration: undefined;
  OneTimePassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RegistrationScreen = () => (
  <Registration heading="Registration" subheading="Create an account" />
);

const OneTimePasswordScreen = () => {
  const [code, setCode] = useState('');

  return (
    <YStack flex={1} justifyContent="center" padding="$4">
      <OneTimePassword
        autoFocus
        helperText="Enter the six-digit code sent to your email."
        label="Verify your account"
        onChangeText={setCode}
        onSubmit={() => undefined}
        value={code}
      />
    </YStack>
  );
};

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
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Registration">
              <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OneTimePassword"
                component={OneTimePasswordScreen}
                options={{ title: 'One-time password' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
