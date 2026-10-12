import { expect, test, type Page } from '@playwright/test';

const validEmail = 'valid.user@example.com';
const validPassword = 'ValidPass1!';

const fillRegistration = async (
  page: Page,
  values: { email: string; password: string; confirmPassword: string },
) => {
  await page.getByLabel('Email').fill(values.email);
  await page.getByLabel('Password', { exact: true }).fill(values.password);
  await page.getByLabel('Confirm Password').fill(values.confirmPassword);
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('renders the registration screen', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Registration', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Create an account', exact: true }),
  ).toBeVisible();
});

test('blocks submit when the form is empty', async ({ page }) => {
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Enter a valid email address')).toBeVisible();
  await expect(
    page.getByText(/Password must be at least 8 characters/),
  ).toBeVisible();
  await expect(
    page.getByText('You must accept Terms & Conditions and Privacy Policy'),
  ).toBeVisible();
});

test('validates email format', async ({ page }) => {
  await fillRegistration(page, {
    email: 'invalid-email',
    password: validPassword,
    confirmPassword: validPassword,
  });
  await page.getByRole('checkbox', { name: 'Terms of Service' }).check();
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Enter a valid email address')).toBeVisible();
  await expect(
    page.getByText(/Password must be at least 8 characters/),
  ).toHaveCount(0);
  await expect(page.getByText('Confirm password must match password')).toHaveCount(
    0,
  );
});

test('enforces password rules', async ({ page }) => {
  await fillRegistration(page, {
    email: validEmail,
    password: 'abc',
    confirmPassword: 'abc',
  });
  await page.getByRole('checkbox', { name: 'Terms of Service' }).check();

  await expect(
    page.getByText('Must be at least 8 characters long'),
  ).toBeVisible();
  await expect(page.getByText('Must contain one uppercase letter')).toBeVisible();

  await page.getByRole('button', { name: 'Register' }).click();
  await expect(
    page.getByText(/Password must be at least 8 characters/),
  ).toBeVisible();

  await page.getByLabel('Password', { exact: true }).fill(validPassword);
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(
    page.getByText(/Password must be at least 8 characters/),
  ).toHaveCount(0);
  await expect(
    page.getByText('Confirm password must match password'),
  ).toBeVisible();
});

test('requires confirm password to match', async ({ page }) => {
  await fillRegistration(page, {
    email: validEmail,
    password: validPassword,
    confirmPassword: 'WrongPass1!',
  });
  await page.getByRole('checkbox', { name: 'Terms of Service' }).check();
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(
    page.getByText('Confirm password must match password'),
  ).toBeVisible();
});

test('requires terms acceptance', async ({ page }) => {
  await fillRegistration(page, {
    email: validEmail,
    password: validPassword,
    confirmPassword: validPassword,
  });
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(
    page.getByText('You must accept Terms & Conditions and Privacy Policy'),
  ).toBeVisible();
});
