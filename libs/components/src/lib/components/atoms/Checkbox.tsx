import {Checkbox as TamaguiCheckBox, CheckboxProps, } from 'tamagui';
import { Check } from '../icons';
import { Label } from './Label';
import { XStack } from './XStack';
export type CheckboxLabelProps = CheckboxProps & {
  labelText: string;
};
export const Checkbox = ({
  children,
  id,
  labelText = 'Please select',
  ...rest
}: CheckboxLabelProps) => {
  return (
    <XStack gap="$2" alignItems="center">
      <TamaguiCheckBox id={id} {...rest}>
        <TamaguiCheckBox.Indicator>
          <Check />
        </TamaguiCheckBox.Indicator>
      </TamaguiCheckBox>
      <Label htmlFor={id} size="$4" fontWeight="bold">
        {labelText}
      </Label>
    </XStack>
  );
};
