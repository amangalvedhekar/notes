import { Button as TamaguiButton, ButtonProps } from 'tamagui';

export const Button = ({children}: ButtonProps) => {
  return (
    <TamaguiButton>
      {children}
    </TamaguiButton>
  )
}
