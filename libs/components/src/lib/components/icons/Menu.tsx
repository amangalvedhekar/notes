import Svg, { Path, SvgProps } from 'react-native-svg';

export const Menu = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M7 16h18M7 25h18M7 7h18"
    />
  </Svg>
);

