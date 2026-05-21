import Svg, { Path, SvgProps } from 'react-native-svg';

export const LeetCode = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    {...props}
  >
    <Path
      d="m33.81 34.877-6.938 6.937a5.726 5.726 0 0 1-8.115 0L8.613 31.67a5.726 5.726 0 0 1 0-8.116L18.757 13.41a5.726 5.726 0 0 1 8.115 0l7.628 7.627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m18.757 13.41 9.008-8.91"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.584 27.592h21.49"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
