import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider, Amplify, AuthProvider } from '@notes/components';
import { router } from './router';

// setup env
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: '',
      userPoolClientId: '',
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
