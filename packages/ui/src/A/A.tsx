// Global import
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';

// Local import
import { AnchorProps, StyledAnchor } from '.';

export class A extends Component<AnchorProps> {
  public static contextTypes: any = {
    router: PropTypes.any
  };

  private handleAnchor = (e: any): void => {
    e.preventDefault();
    const { history }: any = this.context.router;
    const { href }: AnchorProps = this.props;

    history.push(href);
  };

  public render(): JSX.Element {
    const {
      children,
      className,
      color = 'none',
      disabled = false,
      href,
      icon,
      isInvert = false,
      size
    }: AnchorProps = this.props;

    return (
      <StyledAnchor
        className={className}
        color={color}
        disabled={disabled}
        href={href}
        isInvert={isInvert}
        size={size}
        onClick={this.handleAnchor}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledAnchor>
    );
  }
}
