import { act, render, screen } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router';
import { ThemeProvider } from '@notes/components';
import { routeTree } from '../router';

describe('App', () => {
  it('should render successfully', async () => {
    const testRouter = createRouter({
      routeTree,
      history: createMemoryHistory({
        initialEntries: ['/'],
      }),
    });

    await act(async () => {
      render(
        <ThemeProvider>
          <RouterProvider router={testRouter} />
        </ThemeProvider>
      );
      await testRouter.load();
    });

    const baseElement = document.body;
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByRole('heading', { name: 'aws-amplify-cognito-web' })
    ).toBeTruthy();
  });
});
