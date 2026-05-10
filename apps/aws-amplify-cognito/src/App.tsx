import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider, Registration, ThemeProvider, Amplify } from '@notes/components';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ZOcHnet4',
      userPoolClientId: '33g22bd3smodccocnl6r8af7d3',
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
