import { Square, XStack, YStack } from 'tamagui';
import { FeedbackMessage } from '../molecules';
import type { FeedbackMessageBase } from '../molecules';
import { Fragment } from 'react';

export type LiveValidationItem = FeedbackMessageBase & {
  isValid: boolean;
  key: string;
};

export type LiveValidationProps = {
  items: LiveValidationItem[];
  visible?: boolean;
  showProgressBar?: boolean;
};

export const LiveValidation = ({
  items,
  visible = true,
  showProgressBar = false,
}: LiveValidationProps) => {
  if (!visible || items.length === 0) {
    return null;
  }

  return (
    <Fragment>
      {showProgressBar ? (
        <XStack flex={1} margin="$2">
          {items.map((item) => (
            <XStack key={item.key} flex={1 / items.length}>
              <Square
                height="$1"
                flexGrow={1}
                backgroundColor={item.isValid ? 'green' : 'red'}
                bordered
                borderRadius="$2"
              />
            </XStack>
          ))}
        </XStack>
      ) : null}

      {items.map(({ key, isValid, ...item }) => (
        <YStack key={key} flex={1} margin="$2">
          <FeedbackMessage
            {...item}
            type={isValid ? 'success' : 'error'}
          />
        </YStack>
      ))}
    </Fragment>
  );
};
