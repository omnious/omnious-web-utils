// Global import
import * as React from 'react';
import { HTMLAttributes } from 'react';

// Local import
import { StyleWrapper, Tools } from './styles';

export interface Props extends HTMLAttributes<HTMLElement> {
  text?: any,
};

export class TitleBar extends React.PureComponent<Props> {
  render() {
    const {
      text,
      children,
      ...props
    } = this.props;

    return (
      <StyleWrapper {...props}>
        {text}
        <Tools>
          {children}
        </Tools>
      </StyleWrapper>
    );
  }
};