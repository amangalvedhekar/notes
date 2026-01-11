import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider, AuthProvider } from '@notes/components';
import { Registration } from './screens/signedout/Registration';


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
