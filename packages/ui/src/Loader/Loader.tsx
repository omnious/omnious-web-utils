// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { StyledLoader } from '.';

// Interface
export interface LoaderProps {
  color: string;
  isInvert?: boolean;
  size: string;
}

// Component
export const Loader: SFC<LoaderProps> = ({
  color,
  isInvert,
  size,
  ...others
}: LoaderProps): JSX.Element => (
  <StyledLoader color={color} isInvert={isInvert} size={size} {...others} />
);
