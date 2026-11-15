import { createRoute } from '@tanstack/react-router';
import {
 Registration,
} from '@amangalvedhekar/components';
import { rootRoute } from './app';


const HomePage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 760 }}>
        <Registration heading="Registration" subheading="Create an account"/>
      </div>
    </div>
  );
};

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
