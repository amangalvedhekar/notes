import {TamaguiProvider} from 'tamagui';
import { ThemeProviderProps } from './types';
import {createTamagui} from "tamagui";
import { defaultConfig } from '@tamagui/config/v5';

const config = createTamagui({
  ...defaultConfig,

});
export const ThemeProvider = ({children, ...rest}: ThemeProviderProps) => {
  return (
    <TamaguiProvider config={config} {...rest} >
      {children}
    </TamaguiProvider>
  )
}
