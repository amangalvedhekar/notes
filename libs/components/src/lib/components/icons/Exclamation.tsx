import Svg, { SvgProps, Path } from 'react-native-svg';

export const Exclamation = ({ width = 24, height = 24,color, ...rest }: SvgProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...rest}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.99V17m0-10v7m9-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);
