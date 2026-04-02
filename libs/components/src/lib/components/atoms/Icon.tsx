import { Check, Cross, Exclamation } from '../icons';
import {SvgProps} from 'react-native-svg';
import React from 'react';

export type IconName = 'success' | 'warning' | 'error';

export type IconProps = SvgProps & {
  name: IconName;
}

const ICON_LOOK_UP: Record<IconName, (props: SvgProps) =>React.JSX.Element> = {
  success: Check,
  warning: Exclamation,
  error: Cross
};

export const Icon = ({name, ...rest}: IconProps) => {
const Component = ICON_LOOK_UP[name];
const colorLookUp: Record<IconName, string> = {
  success: 'green',
  warning: 'orange',
  error: 'red',
};
const color = colorLookUp[name];
if (!Component) return null;
return (<Component {...rest} color={color}/>)
}
