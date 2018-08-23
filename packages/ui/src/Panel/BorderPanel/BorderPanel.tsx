// Global import
import * as React from 'react';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel } from '../Panel';
import {
  TopStyleWrapper,
  LeftStyleWrapper,
  CenterStyleWrapper,
  RightStyleWrapper,
  BottomStyleWrapper,
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
        {top && (<TopStyleWrapper>{top}</TopStyleWrapper>)}
        {left && (<LeftStyleWrapper>{left}</LeftStyleWrapper>)}
        {center && (<CenterStyleWrapper>{center}</CenterStyleWrapper>)}
        {right && (<RightStyleWrapper>{right}</RightStyleWrapper>)}
        {bottom && (<BottomStyleWrapper>{bottom}</BottomStyleWrapper>)}
      </Panel>
    );
  }
}