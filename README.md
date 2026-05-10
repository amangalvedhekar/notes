# Notes

Nx monorepo for cross-platform experiments with shared UI components.

## Workspace

### Libraries

- `@notes/components` (`libs/components`)
  - Shared Tamagui-based component library.

### Applications

- `@notes/aws-amplify-cognito` (`apps/aws-amplify-cognito`)
  - React Native app using AWS Amplify Cognito and `@notes/components`.
- `@notes/aws-amplify-cognito-web` (`apps/aws-amplify-cognito-web`)
  - Web app using the same auth flow and shared components.
- `@notes/docs` (`apps/docs`)
  - Web Storybook/docs app for component documentation.
- `@notes/docs-mobile` (`apps/docs-mobile`)
  - React Native docs/demo app.

## Getting Started

```bash
npm install
npx nx show projects
```

## Common Commands

Run a web app in dev mode:

```bash
npx nx dev @notes/aws-amplify-cognito-web
```

Run Storybook/docs:

```bash
npx nx storybook @notes/docs
```

Start React Native app (Metro + platform run):

```bash
npx nx start @notes/aws-amplify-cognito
npx nx run-ios @notes/aws-amplify-cognito
# or
npx nx run-android @notes/aws-amplify-cognito
```

Run checks:

```bash
npx nx lint @notes/components
npx nx test @notes/components
npx nx typecheck @notes/components
```
