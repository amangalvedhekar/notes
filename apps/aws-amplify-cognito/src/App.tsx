import React from 'react';
import { ScrollView, StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider, InputWithLabel } from '@notes/components';


export const App = () => {
  const scheme = useColorScheme();
  return (
    <ThemeProvider defaultTheme={scheme}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <InputWithLabel labelText="Email" id="email" />
        <InputWithLabel labelText="Password" id="password" />
        {/*<Button>lol</Button>*/}
      </ScrollView>
    </ThemeProvider>
  );
};

export default App;
