import * as React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import * as Auth from 'aws-amplify/auth';
import { AuthProvider, Button, ThemeProvider, useAuth } from '../src';

jest.mock('aws-amplify/auth');
const Trigger = ({
  triggerType,
  username = '',
  password = '',
  confirmationCode = '',
}: {
  triggerType: TriggerType;
  username?: string;
  password?: string;
  confirmationCode?: string;
}) => {
  const { register, confirmUser } = useAuth();
  const onPress = async () => {
    const lookUp = {
      register: () => register({ username, password }),
      confirmUser: () => confirmUser({ username, confirmationCode }),
    }[triggerType];
    await lookUp();
  };
  return (
    <Button testID="test-button" onPress={onPress}>
      Press Me
    </Button>
  );
};
export type TriggerType = 'register' | 'confirmUser' | 'login' | 'logout';
const ComponentUnderTest = ({ triggerType }: { triggerType?: TriggerType }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <Trigger triggerType={triggerType} />
      </AuthProvider>
    </ThemeProvider>
  );
};
describe('Auth Context', () => {
  it('renders without crashing', () => {
    render(<ComponentUnderTest />);
    expect(screen.getByText('Press Me')).toBeTruthy();
  });

  it(`calls signUp from amplify when register is called`, async () => {
    const user = userEvent.setup();
    const mockedSignUp = jest.fn();
    const expectedParams = { password: '', username: '' };

    (Auth as jest.Mocked<typeof Auth>).signUp = mockedSignUp.mockResolvedValue(
      {}
    );
    render(<ComponentUnderTest triggerType="register" />);
    const element = screen.getByTestId('test-button');
    await user.press(element);
    expect(mockedSignUp).toHaveBeenCalledTimes(1);
    expect(mockedSignUp).toHaveBeenCalledWith(expectedParams);
  });

  it('calls confirmSignUp from amplify when confirmUser is called', async () => {
    const user = userEvent.setup();
    const mockedConfirmSignUp = jest.fn();
    const expectedParams = { confirmationCode: '', username: '' };
    (Auth as jest.Mocked<typeof Auth>).confirmSignUp =
      mockedConfirmSignUp.mockResolvedValue({});
    render(<ComponentUnderTest triggerType="confirmUser" />);
    const element = screen.getByTestId('test-button');
    await user.press(element);
    expect(mockedConfirmSignUp).toHaveBeenCalledTimes(1);
    expect(mockedConfirmSignUp).toHaveBeenCalledWith(expectedParams);
  });
});
