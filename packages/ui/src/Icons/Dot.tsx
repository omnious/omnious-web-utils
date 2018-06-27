// Global import
import * as React from 'react';

export const Dot: any = ({ className, checked }: any): JSX.Element =>
  checked ? (
    <svg
      className={className}
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Radio-Button-Selected</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-3.000000, -3.000000)">
          <g transform="translate(3.000000, 3.000000)">
            <circle stroke="#3D70B2" fill="#FFFFFF" cx="9" cy="9" r="8.5" />
            <circle fill="#249CFF" cx="9" cy="9" r="4" />
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      className={className}
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Radio - Unselected</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-3.000000, -3.000000)" fill="#FFFFFF" stroke="#8C9BA5">
          <g transform="translate(3.000000, 3.000000)">
            <circle cx="9" cy="9" r="8.5" />
          </g>
        </g>
      </g>
    </svg>
  );
