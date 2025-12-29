import { Label as TamaguiLabel, LabelProps } from 'tamagui';

export const Label= ({children, ...rest}: LabelProps) => {
  return (
    <TamaguiLabel {...rest}>{children}</TamaguiLabel>
  )
}
