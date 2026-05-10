import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider, Amplify, AuthProvider } from '@notes/components';
import { router } from './router';

const userPoolId = import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID ?? '';
const userPoolClientId =
  import.meta.env.VITE_AWS_COGNITO_USER_POOL_CLIENT_ID ?? '';

if (!userPoolId || !userPoolClientId) {
  console.warn(
    'Missing AWS Cognito env vars. Set VITE_AWS_COGNITO_USER_POOL_ID and VITE_AWS_COGNITO_USER_POOL_CLIENT_ID in apps/aws-amplify-cognito-web/.env.'
  );
}

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId,
      userPoolClientId,
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
