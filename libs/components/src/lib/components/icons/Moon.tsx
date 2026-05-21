import Svg, { Path, SvgProps } from 'react-native-svg';

export const Moon = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={color}
      d="M12 22c5.523 0 10-4.477 10-10 0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </Svg>
);

