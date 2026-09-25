import Svg, { Path, SvgProps } from 'react-native-svg';

export const Close = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" {...props}>
    <Path
      fill={color}
      d="m14.41 3.27-.82-.94L8 7.17 2.41 2.33l-.82.94L7.05 8l-5.46 4.73.82.94L8 8.83l5.59 4.84.82-.94L8.95 8l5.46-4.73z"
    />
  </Svg>
);
