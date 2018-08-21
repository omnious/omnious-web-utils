// Global import
import * as React from 'react';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel } from '../Panel';
import {
  TopWrapper,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
  BottomWrapper,
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
        <TopWrapper>{top}</TopWrapper>
        <LeftWrapper>{left}</LeftWrapper>
        <CenterWrapper>{center}</CenterWrapper>
        <RightWrapper>{right}</RightWrapper>
        <BottomWrapper>{bottom}</BottomWrapper>
      </Panel>
    );
  }
}