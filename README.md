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
- `@notes/aws-amplify-cognito-e2e` (`apps/aws-amplify-cognito-e2e`)
  - Detox E2E test project for the React Native Cognito app.

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

Run React Native Metro bundler only:

```bash
npx nx start @notes/aws-amplify-cognito
```

Run React Native app on iOS only:

```bash
npx nx run-ios @notes/aws-amplify-cognito
```

Run React Native app on Android only:

```bash
npx nx run-android @notes/aws-amplify-cognito
```

Run checks:

```bash
npx nx lint @notes/components
npx nx test @notes/components
npx nx typecheck @notes/components
```

Run Detox E2E (AWS Amplify Cognito app):

```bash
# iOS debug (requires Metro running)
npx react-native start --config apps/aws-amplify-cognito/metro.config.js --port 8081
npx nx run @notes/aws-amplify-cognito-e2e:test-ios --reuse

# iOS release (no Metro required)
npx nx run @notes/aws-amplify-cognito-e2e:test-ios --configuration=production

# Android debug (requires Metro on 8081)
npx react-native start --config apps/aws-amplify-cognito/metro.config.js --port 8081
npx nx run @notes/aws-amplify-cognito-e2e:test-android

# Android release (no Metro required)
npx nx run @notes/aws-amplify-cognito-e2e:test-android --configuration=production
```

Detox setup notes:

- AppDelegate was updated to expose `reactNativeFactory` / `rootViewFactory` for Detox React Native reload compatibility.
- Registration screen uses stable `testID` values used by Detox assertions.
- If you see `No script URL provided` in iOS debug tests, start Metro before running Detox.
- Android app includes Detox instrumentation wiring (`AndroidJUnitRunner`, `DetoxTest`, and Android test dependencies).
- Android debug Detox config forwards Metro with `reversePorts: [8081]`.
- Android release uses `apps/aws-amplify-cognito/android/app/src/release/AndroidManifest.xml` with `usesCleartextTraffic=true` so Detox can connect over `ws://localhost:<port>` during `test-android --configuration=production`.
