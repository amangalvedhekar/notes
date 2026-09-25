import { act, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { vi } from 'vitest';
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router';
import { routeTree } from '../router';

vi.mock('tamagui', () => ({
  H1: (props: ComponentProps<'h1'>) => <h1 {...props} />,
}));

vi.mock('@notes/components', () => ({
  Registration: () => <div>Registration</div>,
}));

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
        <RouterProvider router={testRouter} />
      );
      await testRouter.load();
    });

    const baseElement = document.body;
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByRole('heading', { name: 'AWS Amplify Cognito Web' })
    ).toBeTruthy();
  });
});
