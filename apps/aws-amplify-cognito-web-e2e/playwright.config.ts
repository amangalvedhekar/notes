import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  outputDir: './test-output/playwright',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [
        ['list'],
        ['html', { outputFolder: './test-output/playwright-report', open: 'never' }],
      ]
    : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4200',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: process.env.PLAYWRIGHT_CHANNEL ?? 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: process.env.PLAYWRIGHT_CHANNEL,
      },
    },
  ],
  webServer: {
    command:
      'npx nx run @notes/aws-amplify-cognito-web:preview --host=127.0.0.1',
    url: 'http://127.0.0.1:4200',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
