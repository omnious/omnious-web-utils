// Global import
import * as React from 'react';
import { ReactChildren, SFC } from 'react';

// Local import
import { StyledMega } from '.';

// Interface
export interface MegaProps {
  children: ReactChildren;
  className: string;
}

export const Mega: SFC<MegaProps> = ({
  children,
  className,
  ...others
}: MegaProps): JSX.Element => (
  <StyledMega className={className} {...others}>
    {children}
  </StyledMega>
);
