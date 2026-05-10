import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './app/app';
import { homeRoute } from './app/home-route';

export const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStructuralSharing: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
