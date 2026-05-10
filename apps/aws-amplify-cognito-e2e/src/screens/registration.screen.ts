import { by, element, waitFor } from 'detox';
import { registrationIds } from '@notes/test-ids';

export class RegistrationScreen {
  get root() {
    return element(by.id(registrationIds.screen));
  }

  get title() {
    return element(by.id(registrationIds.title));
  }

  get subtitle() {
    return element(by.id(registrationIds.subtitle));
  }

  get emailInput() {
    return element(by.id(registrationIds.emailInput));
  }

  get passwordInput() {
    return element(by.id(registrationIds.passwordInput));
  }

  get confirmPasswordInput() {
    return element(by.id(registrationIds.confirmPasswordInput));
  }

  get legalAgreementCheckbox() {
    return element(by.id(registrationIds.legalAgreementCheckbox));
  }

  get submitButton() {
    return element(by.id(registrationIds.submitButton));
  }

  get emailError() {
    return element(by.id(registrationIds.emailError));
  }

  get passwordError() {
    return element(by.id(registrationIds.passwordError));
  }

  get confirmPasswordError() {
    return element(by.id(registrationIds.confirmPasswordError));
  }

  get acceptedLegalError() {
    return element(by.id(registrationIds.acceptedLegalError));
  }

  get serverError() {
    return element(by.id(registrationIds.serverError));
  }

  get passwordMinLengthMessage() {
    return element(by.id(`${registrationIds.passwordRules.minLength}-msg`));
  }

  get passwordUppercaseMessage() {
    return element(by.id(`${registrationIds.passwordRules.uppercase}-msg`));
  }

  async setEmail(value: string) {
    await this.emailInput.replaceText(value);
  }

  async setPassword(value: string) {
    await this.passwordInput.replaceText(value);
  }

  async setConfirmPassword(value: string) {
    await this.confirmPasswordInput.replaceText(value);
    await this.confirmPasswordInput.tapReturnKey();
  }

  async acceptLegalAgreement() {
    await waitFor(this.legalAgreementCheckbox)
      .toBeVisible()
      .whileElement(by.id(registrationIds.screen))
      .scroll(160, 'down');
    await this.legalAgreementCheckbox.tap();
  }

  async tapSubmit() {
    await waitFor(this.submitButton)
      .toBeVisible()
      .whileElement(by.id(registrationIds.screen))
      .scroll(200, 'down');
    await this.submitButton.tap();
  }
}
