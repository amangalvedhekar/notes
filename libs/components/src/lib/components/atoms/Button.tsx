import { Button as TamaguiButton, ButtonProps as TamaguiProps, Spinner } from 'tamagui';

export type ButtonProps = TamaguiProps & {
  isLoading?: boolean;
};

export const Button = ({children, isLoading = false, disabled = false, ...rest}: ButtonProps) => {
  return (
    <TamaguiButton {...rest} opacity={disabled ? 0.3: 1}>
      {isLoading ? <Spinner /> : children}
    </TamaguiButton>
  )
}
