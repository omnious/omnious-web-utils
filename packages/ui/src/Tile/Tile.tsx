// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { StyledTile } from '.';
import { CommonProps } from '../constants';

export class Tile extends Component<CommonProps> {
  public render(): JSX.Element {
    const { children, className }: CommonProps = this.props;

    return <StyledTile className={className}>{children}</StyledTile>;
  }
}
