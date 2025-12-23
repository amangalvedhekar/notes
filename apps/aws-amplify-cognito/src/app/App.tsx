import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { ThemeProvider, Button, Input } from '@notes/components';


export const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Input
          placeholder="Email"
          marginVertical="$3"
          size="$6"
          inputMode="email"
          autoComplete="email"
          textContentType="username"
        />
        <Button>lol</Button>
      </ScrollView>
    </ThemeProvider>
  );
};

export default App;
