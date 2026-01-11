import {XStack as TamaguiXStack, XStackProps } from 'tamagui';

export const XStack = ({children ,...rest}: XStackProps) => {
  return (
    <TamaguiXStack {...rest}>
      {children}
    </TamaguiXStack>
  )
}
