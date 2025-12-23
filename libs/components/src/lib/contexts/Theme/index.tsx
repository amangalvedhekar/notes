import {TamaguiProvider} from 'tamagui';
import { ThemeProviderProps } from './types';
import {createTamagui} from "tamagui";
import {config as tamaguiConfig} from "@tamagui/config/v3";

export const config = createTamagui(tamaguiConfig);
export const ThemeProvider = ({children, ...rest}: ThemeProviderProps) => {
  return (
    <TamaguiProvider config={config} {...rest} >
      {children}
    </TamaguiProvider>
  )
}
