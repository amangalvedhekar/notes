import { forwardRef, type ComponentRef } from 'react';
import { Input as TamaguiInput, type InputProps as TamaguiInputProps } from 'tamagui';

export type InputProps = TamaguiInputProps;

export const Input = forwardRef<ComponentRef<typeof TamaguiInput>, InputProps>((props, ref) => (
  <TamaguiInput ref={ref} {...props} />
));

Input.displayName = 'Input';
