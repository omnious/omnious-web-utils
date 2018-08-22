// Global import
import * as React from 'react';
import { HTMLAttributes } from 'react';

// Local import

export interface Props extends HTMLAttributes<HTMLLIElement> {
  text?: string,
}

export interface State {
  expand: boolean,
}

export class MenuItem extends React.PureComponent<Props, State> {
  render() {
    const {
      text,

      children,
      ...props
    } = this.props;

    const itemText = text || children;

    return (
      <li {...props}>
        {itemText}
      </li>
    );
  }
}