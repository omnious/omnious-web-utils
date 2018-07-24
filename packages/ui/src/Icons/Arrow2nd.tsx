// Global import
import * as React from 'react';

// Local import
import { white } from '../colors';

export const Arrow2nd: any = ({ color = white.primary }: any): JSX.Element => (
  <svg
    width="15px"
    height="9px"
    viewBox="0 0 15 9"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeWidth="2"
      d="M1 8.287L7.287 2l6.286 6.287"
    />
  </svg>
);
