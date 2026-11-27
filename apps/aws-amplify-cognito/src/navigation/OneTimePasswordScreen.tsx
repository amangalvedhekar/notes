import { useState } from 'react';
import {
  OneTimePassword,
  useAuth,
  YStack,
} from '@amangalvedhekar/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

type OneTimePasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OneTimePassword'
>;

const getConfirmationErrorMessage = (error: unknown) => {
  const errorName =
    typeof error === 'object' && error !== null && 'name' in error
      ? String(error.name)
      : '';

  if (errorName === 'CodeMismatchException') {
    return 'That verification code is incorrect. Please try again.';
  }

  if (errorName === 'ExpiredCodeException') {
    return 'That verification code has expired. Request a new code and try again.';
  }

  return 'We could not verify your account. Please try again.';
};

export const OneTimePasswordScreen = ({
  route,
}: OneTimePasswordScreenProps) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { completeAutoSignIn, confirmUser } = useAuth();
  const { username } = route.params;

  const onSubmit = async (confirmationCode: string) => {
    setErrorMessage(undefined);
    setIsSubmitting(true);

    try {
      const confirmationResult = await confirmUser({
        username,
        confirmationCode,
      });

      if (
        confirmationResult.nextStep.signUpStep !== 'COMPLETE_AUTO_SIGN_IN'
      ) {
        throw new Error('Auto sign-in is not available.');
      }

      const signInResult = await completeAutoSignIn();

      if (!signInResult.isSignedIn) {
        throw new Error('Auto sign-in did not complete.');
      }

    } catch (error: unknown) {
      setErrorMessage(getConfirmationErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <YStack flex={1} justifyContent="center" padding="$4">
      <OneTimePassword
        autoFocus
        errorMessage={errorMessage}
        helperText="Enter the six-digit code sent to your email."
        isSubmitting={isSubmitting}
        label="Verify your account"
        onChangeText={(value) => {
          setCode(value);
          setErrorMessage(undefined);
        }}
        onSubmit={onSubmit}
        value={code}
      />
    </YStack>
  );
};
