import {
  Button,
  FeedbackMessage,
  Hide,
  InputWithLabel,
  Lock,
  Profile,
  Unlock,
} from '@notes/components';
import { ScrollView } from 'react-native';
import { Square, XStack, YStack } from 'tamagui';

export const Registration = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ margin: 8 }}
    >
      <InputWithLabel
        labelText="Email"
        size="$6"
        placeholder="test@example.com"
        id="email"
        leftIcon={<Profile />}
      />
      <InputWithLabel
        labelText="Password"
        id="password"
        size="$6"
        placeholder="password"
        leftIcon={<Unlock />}
        rightIcon={<Hide />}
      />
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
        <FeedbackMessage
          testID="something"
          message="Must contain one uppercase letter"
          type="success"
        />
      </YStack>
      <YStack flex={1} margin="$2">
        <FeedbackMessage
          testID="something-else"
          message="Must contain one lowercase letter"
          type="warning"
        />
      </YStack>
      <YStack flex={1} margin="$2">
        <FeedbackMessage
          testID="something-else-aswell"
          message="Must contain special characters"
          type="error"
        />
      </YStack>
      <InputWithLabel
        labelText="Confirm Password"
        id="confirmPassword"
        placeholder="confirm password"
        size="$6"
        leftIcon={<Lock />}
      />
      <Button
        themeInverse
        marginVertical="$4"
        marginHorizontal="$2"
        borderRadius="$8"
        size="$6"
        onPress={console.log}
      >
        Register
      </Button>
    </ScrollView>
  );
};
