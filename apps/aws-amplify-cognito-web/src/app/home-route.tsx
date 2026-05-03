import { createRoute } from '@tanstack/react-router';
import {
 Registration,
} from '@notes/components';
import { rootRoute } from './app';

const HomePage = () => {
  return (
   <Registration />
  );
};

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
