import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider, Registration, ThemeProvider, Amplify } from '@notes/components';

// setup dotenv
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: '',
      userPoolClientId: '',
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
