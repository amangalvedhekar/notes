import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { H1 } from 'tamagui';

export const RootRouteComponent = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(180deg, #f7f2e8 0%, #fefcf7 45%, #ffffff 100%)',
          color: '#1f2937',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            borderBottom: '1px solid rgba(31, 41, 55, 0.08)',
          }}
        >
          <H1>AWS Amplify Cognito Web</H1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link
              to="/"
              style={{
                color: '#92400e',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Home
            </Link>
          </nav>
        </header>

        <main style={{ padding: '3rem 2rem' }}>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  );
};

export const rootRoute = createRootRoute({
  component: RootRouteComponent,
});
