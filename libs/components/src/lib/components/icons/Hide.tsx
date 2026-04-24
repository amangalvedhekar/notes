import Svg, { Path, SvgProps } from 'react-native-svg';

export const Hide = ({ height = 24, width = 24, stroke="#000", ...rest }: SvgProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...rest}>
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 2 20 20M6.713 6.723C3.665 8.795 2 12 2 12s3.636 7 10 7c2.05 0 3.817-.727 5.271-1.712M11 5.058A8.595 8.595 0 0 1 12 5c6.364 0 10 7 10 7s-.692 1.332-2 2.834"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 14.236a3 3 0 0 1-4.13-4.348"
    />
  </Svg>
);
