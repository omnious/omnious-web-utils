// Global import
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';

// Local import
import { StyledAnchor } from './styles';
import { Props } from './types';

export class A extends Component<AnchorProps> {
  public render(): JSX.Element {
    const {
      children,
      className,
      color = 'none',
      disabled = false,
      href,
      icon,
      invert = false,
      size = 'md'
    }: AnchorProps = this.props;

    return (
      <StyledAnchor
        className={className}
        color={color}
        disabled={disabled}
        href={href}
        invert={invert}
        size={size}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledAnchor>
    );
  }
}
