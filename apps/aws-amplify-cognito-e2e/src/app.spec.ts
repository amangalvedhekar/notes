import { device, expect } from 'detox';
import { RegistrationScreen } from './screens/registration.screen';

describe('AwsAmplifyCognito', () => {
  const validEmail = 'valid.user@example.com';
  const validPassword = 'ValidPass1!';

  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should render the registration screen', async () => {
    const registrationScreen = new RegistrationScreen();

    await expect(registrationScreen.root).toExist();
    await expect(registrationScreen.title).toBeVisible();
    await expect(registrationScreen.subtitle).toBeVisible();
  });

  it('should block submit when form is empty', async () => {
    const registrationScreen = new RegistrationScreen();

    await registrationScreen.tapSubmit();

    await expect(registrationScreen.emailError).toExist();
    await expect(registrationScreen.passwordError).toExist();
    await expect(registrationScreen.confirmPasswordError).toExist();
    await expect(registrationScreen.acceptedLegalError).toExist();
  });

  it('should validate email format', async () => {
    const registrationScreen = new RegistrationScreen();

    await registrationScreen.setEmail('invalid-email');
    await registrationScreen.setPassword(validPassword);
    await registrationScreen.setConfirmPassword(validPassword);
    await registrationScreen.acceptLegalAgreement();
    await registrationScreen.tapSubmit();

    await expect(registrationScreen.emailError).toExist();
    await expect(registrationScreen.passwordError).not.toExist();
    await expect(registrationScreen.confirmPasswordError).not.toExist();
  });

  it('should enforce password rules', async () => {
    const registrationScreen = new RegistrationScreen();

    await registrationScreen.setEmail(validEmail);
    await registrationScreen.setPassword('abc');
    await registrationScreen.setConfirmPassword('abc');
    await registrationScreen.acceptLegalAgreement();

    await expect(registrationScreen.passwordMinLengthMessage).toBeVisible();
    await expect(registrationScreen.passwordUppercaseMessage).toBeVisible();

    await registrationScreen.tapSubmit();
    await expect(registrationScreen.passwordError).toExist();

    await registrationScreen.setPassword(validPassword);
    await registrationScreen.tapSubmit();

    await expect(registrationScreen.passwordError).not.toExist();
    await expect(registrationScreen.confirmPasswordError).toExist();
  });

  it('should require confirm password to match password', async () => {
    const registrationScreen = new RegistrationScreen();

    await registrationScreen.setEmail(validEmail);
    await registrationScreen.setPassword(validPassword);
    await registrationScreen.setConfirmPassword('WrongPass1!');
    await registrationScreen.acceptLegalAgreement();
    await registrationScreen.tapSubmit();

    await expect(registrationScreen.confirmPasswordError).toExist();
    await expect(registrationScreen.emailError).not.toExist();
    await expect(registrationScreen.passwordError).not.toExist();
  });

  it('should require terms acceptance', async () => {
    const registrationScreen = new RegistrationScreen();

    await registrationScreen.setEmail(validEmail);
    await registrationScreen.setPassword(validPassword);
    await registrationScreen.setConfirmPassword(validPassword);
    await registrationScreen.tapSubmit();

    await expect(registrationScreen.acceptedLegalError).toExist();
    await expect(registrationScreen.emailError).not.toExist();
    await expect(registrationScreen.passwordError).not.toExist();
    await expect(registrationScreen.confirmPasswordError).not.toExist();
  });

  it.skip('should show server error on failed registration', async () => {
    // ToDo: need to think more on this one
  });

  it.skip('should clear server error when user edits a field', async () => {
    // ToDo: need to think more on this one
  });
});
