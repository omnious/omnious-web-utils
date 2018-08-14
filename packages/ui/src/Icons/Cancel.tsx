// Global import
import * as React from 'react';

// Local import
import { white } from '../colors';

export const Cancel: any = ({ color = white.primary }: any): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect width="24" height="24" />
      <path stroke={color} strokeLinecap="square" d="M7 16L16 7M7 7L16 16" />
    </g>
  </svg>
);
