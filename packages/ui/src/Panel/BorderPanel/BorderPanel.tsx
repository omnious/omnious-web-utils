// Global import
import * as React from 'react';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel } from '../Panel';

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