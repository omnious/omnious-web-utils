// Global import
import * as React from 'react';

// Local import
import { IBorderLayout } from './IBorderLayout';
import { Panel, Props as PanelProps } from '../Panel';
import {
  Top,
  Left,
  Center,
  Right,
  Bottom,
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
        {top}
        {left}
        {center}
        {right}
        {bottom}
      </Panel>
    );
  }
}

export {
  Top,
  Left,
  Center,
  Right,
  Bottom,
};