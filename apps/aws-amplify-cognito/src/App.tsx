import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { AuthProvider, Registration, ThemeProvider } from '@notes/components';


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
