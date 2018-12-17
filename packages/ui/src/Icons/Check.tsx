// Global import
import * as React from 'react';

// Local import
import { white } from '../colors';

export const Check: any = ({ color = white.primary }: any): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <polyline
        stroke={color}
        points="14.541 3.291 14.526 15.776 8.541 15.791"
        transform="rotate(45 11.54 9.54)"
      />
    </g>
  </svg>
);
