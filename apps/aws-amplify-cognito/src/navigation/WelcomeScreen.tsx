import { Paragraph, useAuth, YStack } from '@amangalvedhekar/components';

export const WelcomeScreen = () => {
  const { username } = useAuth();

  return (
    <YStack flex={1}  >
      <Paragraph fontSize="$9" fontWeight="700" textAlign="center">
        Welcome, {username}
      </Paragraph>
    </YStack>
  );
};
