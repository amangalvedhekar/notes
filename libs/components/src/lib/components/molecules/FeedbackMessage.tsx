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
    <XStack alignItems="center" gap="$2">
      <XStack width={24} minWidth={24} justifyContent="center" alignItems="center">
        <Icon name={type} testID={`${testID}-icon`} />
      </XStack>
      <XStack flex={1}>
        <Paragraph flexShrink={1} testID={`${testID}-msg`}>
          {message}
        </Paragraph>
      </XStack>
    </XStack>
  );
};
