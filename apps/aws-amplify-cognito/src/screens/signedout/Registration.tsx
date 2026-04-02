import {
  Button,
  Check,
  Cross,
  Exclamation,
  FeedbackMessage,
  InputWithLabel,
} from '@notes/components';
import { ScrollView } from 'react-native';
import { Paragraph, Square, XStack, YStack } from 'tamagui';

export const Registration = () => {

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <InputWithLabel labelText="Email" id="email" isInvalid />
      <InputWithLabel labelText="Password" id="password" isInvalid />
      <XStack flex={1} margin="$2">
        <XStack flex={0.3}>
          <Square
            height="$1"
            flexGrow={1}
            backgroundColor="red"
            bordered
            borderRadius="$2"
          />
        </XStack>

        <XStack flex={0.3}>
          <Square
            height="$1"
            flexGrow={1}
            backgroundColor="orange"
            bordered
            borderRadius="$2"
          />
        </XStack>

        <XStack flex={0.4}>
          <Square
            height="$1"
            flexGrow={1}
            backgroundColor="green"
            bordered
            borderRadius="$2"
          />
        </XStack>
      </XStack>
      <YStack flex={1} margin="$2">
        <FeedbackMessage testID="something" message="hmmmhmmmhmmm" type="warning" />

      </YStack>
      <InputWithLabel labelText="Confirm Password" id="confirmPassword" />
      <Button
        themeInverse
        marginVertical="$4"
        marginHorizontal="$4"
        borderRadius="$8"
      >
        Register
      </Button>
    </ScrollView>
  );
};
