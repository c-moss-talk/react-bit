import React from "react";
import Svg, { Path } from "svgs";

const ArrowUp = ({
  width = 10,
  height = 16,
  fill = "#0FC1A7",
  ...otherProps
}) => (
  <Svg width={width} height={height} viewBox="0 0 10 16" {...otherProps}>
    <Path
      d="M331.247 265.24a.796.796 0 00-.002 1.151L336 271l4.754-4.609a.794.794 0 00-.001-1.15.854.854 0 00-1.19.001L336 268.696l-3.563-3.454a.858.858 0 00-1.19-.002z"
      transform="translate(-331 -265) rotate(180 336 268)"
      fill={fill}
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    />
  </Svg>
);

export default ArrowUp;
