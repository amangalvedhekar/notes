import { ReactNode } from 'react';
import { Input, Label } from '../atoms';
import { InputProps, YStack } from 'tamagui';
import { Paragraph } from '../atoms/Paragraph';

export interface InputWithLabelProps extends InputProps {
  labelText: string;
  id: string;
  isInvalid?: boolean;
  alignment?: 'horizontal' | 'vertical';
  errorMessage?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
}

export const InputWithLabel = ({
  labelText,
  id,
  isInvalid,
  alignment = 'vertical',
  errorMessage,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...rest
}: InputWithLabelProps) => {
  return (
    <YStack marginHorizontal="$2">
      <Label htmlFor={id} size="$4">
        {labelText}
      </Label>
      <YStack position="relative">
        {leftIcon && (
          <YStack
            position="absolute"
            left="$3"
            top={0}
            bottom={0}
            justifyContent="center"
            pointerEvents="none"
            zIndex="$1"
          >
            {leftIcon}
          </YStack>
        )}
        {rightIcon && (
          <YStack
            position="absolute"
            right="$3"
            top={0}
            bottom={0}
            justifyContent="center"
            zIndex="$1"
            pressStyle={{ opacity: 0.7 }}
            onPress={onRightIconPress}
            pointerEvents={onRightIconPress ? 'auto' : 'none'}
          >
            {rightIcon}
          </YStack>
        )}
        <Input
          id={id}
          size="$4"
          borderRadius="$8"
          paddingLeft={leftIcon ? '$8' : rest.paddingLeft}
          paddingRight={rightIcon ? '$8' : rest.paddingRight}
          {...(isInvalid ? { borderColor: 'red' } : {})}
          {...rest}
        />
      </YStack>
      {isInvalid && errorMessage && <Paragraph color="red">{errorMessage}</Paragraph>}
    </YStack>
  );
};
