import Svg, { Path, SvgProps } from 'react-native-svg';

export const ChevronRight = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <Path  d="M0 0h24v24H0z" />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.5 7 5 5-5 5"
    />
  </Svg>
);


export const ChevronLeft = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (
  <Svg viewBox="0 0 532 532" width={width} height={height} {...props}>
    <Path
      fill={color}
      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
    />
  </Svg>
);

export const CarouselRight = ({ width = 32, height = 32, color = '#fff', ...props }: SvgProps) => (   <Svg viewBox="0 0 532 532" width={width} height={height} {...props}>
  <Path
    fill={color}
    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
  />
</Svg>)
