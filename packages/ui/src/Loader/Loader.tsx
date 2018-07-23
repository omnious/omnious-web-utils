// Global import
import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';

// Local import
import { StyledLoader } from './styles';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  isInvert?: boolean;
  size?: string;
}

export const Loader: SFC<LoaderProps> = ({
  className,
  color = 'blue',
  isInvert = false,
  size = 'sm'
}: LoaderProps): JSX.Element => (
  <StyledLoader className={className} color={color} isInvert={isInvert} size={size} />
);
