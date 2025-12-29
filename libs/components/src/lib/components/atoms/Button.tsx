import { Button as TamaguiButton, ButtonProps } from 'tamagui';

export const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <TamaguiButton {...rest}>
      {children}
    </TamaguiButton>
  )
}
