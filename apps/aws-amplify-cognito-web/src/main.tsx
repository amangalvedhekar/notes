import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider, Amplify, AuthProvider } from '@amangalvedhekar/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from './router';

const initialSafeAreaMetrics = {
  frame: { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight },
  insets: { top: 0, right: 0, bottom: 0, left: 0 },
};

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
    <SafeAreaProvider initialMetrics={initialSafeAreaMetrics}>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </StrictMode>
);
