// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { StyledTile, TileProps } from '.';

export class Tile extends Component<TileProps> {
  public render(): JSX.Element {
    const { children, className, passedRef }: TileProps = this.props;

    return (
      <StyledTile className={className} innerRef={passedRef}>
        {children}
      </StyledTile>
    );
  }
}
