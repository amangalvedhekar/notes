import { device, element, by, expect } from 'detox';

describe('AwsAmplifyCognito', () => {
  beforeEach(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should render the registration screen', async () => {
    const screen = element(by.id('registration-screen'));
    const title = element(by.id('registration-title'));
    const subtitle = element(by.id('registration-subtitle'));

    await expect(screen).toExist();
    await expect(title).toBeVisible();
    await expect(subtitle).toBeVisible();
  });
});
