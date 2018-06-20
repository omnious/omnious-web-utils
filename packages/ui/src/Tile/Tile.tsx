// Global import
import * as React from 'react';
import { ReactChildren, SFC } from 'react';

// Local import
import { StyledTile } from '.';

// Interface
export interface TileProps {
  children: ReactChildren;
  className: string;
}

export const Tile: SFC<TileProps> = ({
  children,
  className,
  ...others
}: TileProps): JSX.Element => (
  <StyledTile className={className} {...others}>
    {children}
  </StyledTile>
);
