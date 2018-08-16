// Global import
import * as React from 'react';
import { HTMLAttributes } from 'react';

// Local import
import { ILayout } from './ILayout';
import { Wrapper } from './styles';

export interface Props extends HTMLAttributes<HTMLElement>, ILayout {
};

export class Panel extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
};