import Svg, { Path, SvgProps } from 'react-native-svg';



export const Profile = ({
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = '#000',
  ...rest
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...rest}>
    <Path
      d="M10 9.25a3.75 3.75 0 1 0 0-7.5a3.75 3.75 0 0 0 0 7.5Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.25 18.25a7.75 7.75 0 0 1 15.5 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
