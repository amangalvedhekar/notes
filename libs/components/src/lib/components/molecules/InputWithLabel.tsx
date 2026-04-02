import { Input, Label } from '../atoms';
import { InputProps, YStack } from 'tamagui';
import { Paragraph } from '../atoms/Paragraph';

export interface InputWithLabelProps extends InputProps {
  labelText: string;
  id: string;
  isInvalid?: boolean;
  alignment?: 'horizontal' | 'vertical';
  errorMessage?: string;
}

export const InputWithLabel = ({
  labelText,
  id,
  isInvalid,
  alignment = 'vertical',
  errorMessage,
}: InputWithLabelProps) => {
  return (
    <YStack marginHorizontal="$2">
      <Label htmlFor={id} size="$4">
        {labelText}
      </Label>
      <Input
        id={id}
        size="$4"
        borderRadius="$8"
        {...(isInvalid ? { borderColor: 'red' } : {})}
      />
      {isInvalid && errorMessage && <Paragraph color="red">{errorMessage}</Paragraph>}
    </YStack>
  );
};
