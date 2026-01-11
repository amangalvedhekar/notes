import {TamaguiProvider} from 'tamagui';
import { ThemeProviderProps } from './types';
import {createTamagui} from "tamagui";
import {
  defaultConfig as tamaguiConfig,
} from '@tamagui/config/v4';

export const config = createTamagui({
  ...tamaguiConfig,
  tokens: {
    ...tamaguiConfig.tokens,
    color: {
      success: '#ffffff',
    }
  }
});
export const ThemeProvider = ({children, ...rest}: ThemeProviderProps) => {
  return (
    <TamaguiProvider config={config} {...rest} >
      {children}
    </TamaguiProvider>
  )
}
