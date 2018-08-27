// Global import
import * as React from 'react';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel, Props as PanelProps } from '../Panel';
import {
  TopStyleWrapper,
  LeftStyleWrapper,
  CenterStyleWrapper,
  RightStyleWrapper,
  BottomStyleWrapper,
} from './styles';

export interface Props extends PanelProps, IBorderLayout {
}

export class BorderPanel extends React.PureComponent<Props> {
  render() {
    const {
      top,
      left,
      center,
      right,
      bottom,
      ...props
    } = this.props;
    
    return (
      <Panel {...props}>
        {top && (<TopStyleWrapper>{top}</TopStyleWrapper>)}
        {left && (<LeftStyleWrapper>{left}</LeftStyleWrapper>)}
        {center && (<CenterStyleWrapper>{center}</CenterStyleWrapper>)}
        {right && (<RightStyleWrapper>{right}</RightStyleWrapper>)}
        {bottom && (<BottomStyleWrapper>{bottom}</BottomStyleWrapper>)}
      </Panel>
    );
  }
}