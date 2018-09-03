// Global import
import * as React from 'react';
import { HTMLAttributes } from 'react';

// Local import
import { ILayout } from './ILayout';
import { StyleWrapper } from './styles';
import { TitleBar } from '../TitleBar';

export interface Props extends HTMLAttributes<HTMLElement>, ILayout {
  title?: string,
};

export class Panel extends React.PureComponent<Props> {
  createTitleBar = () => {
    const { title } = this.props;

    if (title) {
      return (
        <TitleBar text={title} />
      );
    }

    return null;
  }

  render() {
    const titleBar = this.createTitleBar();
    const {
      children,
    } = this.props;

    return (
      <StyleWrapper>
        {titleBar}
        {children}
      </StyleWrapper>
    );
  }
};