import { Input, Label } from '../atoms';
import { InputProps, YStack } from 'tamagui';

export interface InputWithLabelProps extends InputProps {
  labelText: string;
  id: string;
  isInvalid?: boolean;
  alignment?: 'horizontal' | 'vertical';
}

export const InputWithLabel = ({
  labelText,
  id,
  isInvalid,
  alignment = 'vertical',
}: InputWithLabelProps) => {
  return (
    <YStack marginHorizontal="$2">
      <Label htmlFor={id} size="$6">
        {labelText}
      </Label>
      <Input
        id={id}
        size="$6"
        borderRadius="$8"
        {...(isInvalid ? { borderColor: 'red' } : {})}
      />
    </YStack>
  );
};
/*
*
*     <XStack margin="$2" alignContent="center">
      <Label htmlFor={id} flex={0.3} size="$6">
        {labelText}
      </Label>
      <Input id={id} flex={0.7} size="$6" />
    </XStack>
* */
