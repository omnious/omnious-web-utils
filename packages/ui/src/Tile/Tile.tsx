// Global import
import * as React from 'react';

// Local import
import { StyledTile } from './styles';

export const Tile: any = ({ children, ...options }: any): JSX.Element => (
  <StyledTile {...options}>{children}</StyledTile>
);
