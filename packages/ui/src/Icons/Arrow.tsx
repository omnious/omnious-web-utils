// // Global import
// import * as React from 'react';

// Local import
import { white } from '../colors';

export const Arrow: any = ({ color = white.primary }: any): JSX.Element => (
  <svg
    width="10px"
    height="5px"
    viewBox="0 0 10 5"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-274.000000, -44.000000)" fill={color}>
        <g transform="translate(0.000000, 1.000000)">
          <g transform="translate(274.000000, 43.000000)">
            <polygon points="10 0 5 5 0 0" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
