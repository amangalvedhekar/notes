import { Registration } from '@amangalvedhekar/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

type RegistrationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Registration'
>;

export const RegistrationScreen = ({
  navigation,
}: RegistrationScreenProps) => (
  <Registration
    heading="Registration"
    subheading="Create an account"
    onConfirmationRequired={(username) =>
      navigation.navigate('OneTimePassword', { username })
    }
  />
);
