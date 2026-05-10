import { createRoute } from '@tanstack/react-router';
import {
 Registration,
} from '@notes/components';
import { rootRoute } from './app';

const HomePage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 760 }}>
        <Registration />
      </div>
    </div>
  );
};

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
