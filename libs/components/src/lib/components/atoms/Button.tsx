import { Button as TamaguiButton, ButtonProps as TamaguiProps, Spinner } from 'tamagui';

export type ButtonProps = TamaguiProps & {
  isLoading?: boolean;
};

export const Button = ({children, isLoading = false, ...rest}: ButtonProps) => {
  return (
    <TamaguiButton {...rest}>
      {isLoading ? <Spinner /> : children}
    </TamaguiButton>
  )
}
