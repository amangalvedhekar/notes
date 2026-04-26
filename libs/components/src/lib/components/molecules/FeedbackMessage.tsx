import { XStack, Paragraph, IconName, Icon } from '../atoms';

export type FeedbackMessageBase = {
  message: string;
  testID: string;
};

export type FeedbackMessageProps = FeedbackMessageBase & {
  type: IconName;
};

export const FeedbackMessage = ({ message, type, testID }: FeedbackMessageProps) => {

  return (
    <XStack flex={1} justifyContent="space-evenly">
      <XStack flex={0.1} justifyContent="flex-start">
        <Icon name={type} testID={`${testID}-icon`} />
      </XStack>
      <XStack flex={0.9} justifyContent="flex-start">
        <Paragraph testID={`${testID}-msg`}>{message}</Paragraph>
      </XStack>
    </XStack>
  );
};
