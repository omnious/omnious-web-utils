// Global import
import * as React from 'react';
import styled from 'styled-components';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel } from '../';
import {
  Top,
  Left,
  Center,
  Right,
  Bottom,
} from './styles';

export interface Props extends IBorderLayout {
}

export class BorderPanel extends React.PureComponent<Props> {
  render() {
    const {
      top,
      left,
      center,
      right,
      bottom,
    } = this.props;
    
    return (
      <Panel>
        {top}
        {left}
        {center}
        {right}
        {bottom}
      </Panel>
    );
  }
}