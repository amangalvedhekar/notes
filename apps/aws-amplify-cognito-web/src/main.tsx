import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider, Amplify, AuthProvider } from '@notes/components';
import { router } from './router';


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ZOcHnet4',
      userPoolClientId: '33g22bd3smodccocnl6r8af7d3',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
