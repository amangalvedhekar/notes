import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Paragraph, useAuth, YStack } from '@amangalvedhekar/components';
import { OneTimePasswordScreen } from './OneTimePasswordScreen';
import { RegistrationScreen } from './RegistrationScreen';
import { WelcomeScreen } from './WelcomeScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isAuthLoading, isSignedIn } = useAuth();

  if (isAuthLoading) {
    return (
      <YStack flex={1} justifyContent="center" padding="$4">
        <Paragraph textAlign="center">Loading...</Paragraph>
      </YStack>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <Stack.Screen
              name="OneTimePassword"
              component={OneTimePasswordScreen}
              options={{ title: 'One-time password' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
