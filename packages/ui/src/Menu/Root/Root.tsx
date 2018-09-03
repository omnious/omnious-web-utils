// Global import
import * as React from 'react';
import { HTMLAttributes } from 'react';

// Local import

export interface Props extends HTMLAttributes<HTMLLIElement> {
  text?: string,
}

export class Root extends React.PureComponent<Props> {
  render() {
    const {
      text,

      children,
      ...props
    } = this.props;

    return (
      <li {...props}>
        {text || children}
      </li>
    );
  }
}