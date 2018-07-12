// Global import
import * as React from 'react';
import { Component, HTMLAttributes } from 'react';

// Local import
import { StyledTile } from './styles';

export type TileProps = HTMLAttributes<HTMLElement>;

export class Tile extends Component<TileProps> {
  public render(): JSX.Element {
    const { children, className }: TileProps = this.props;

    return <StyledTile className={className}>{children}</StyledTile>;
  }
}
