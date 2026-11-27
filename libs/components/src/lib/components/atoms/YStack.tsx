import { YStack as TamaguiYStack, type YStackProps } from 'tamagui';

export const YStack = ({ children, ...rest }: YStackProps) => (
  <TamaguiYStack {...rest}>{children}</TamaguiYStack>
);
