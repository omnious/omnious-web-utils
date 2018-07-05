// Global import
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';

// Local import
import { ButtonProps, StyledAnchor, StyledButton } from '.';
import { Loader } from '../Loader';

export class Button extends Component<ButtonProps> {
  public static contextTypes: any = {
    router: PropTypes.any
  };

  private handleAnchor = (e: any): void => {
    e.preventDefault();
    const { history }: any = this.context.router;
    const { href }: ButtonProps = this.props;

    history.push(href);
  };

  public render(): JSX.Element {
    const {
      children,
      className,
      color = 'default',
      disabled = false,
      href,
      icon,
      isInvert = false,
      isLoading = false,
      size,
      type = 'button',
      value,
      handleButton
    }: ButtonProps = this.props;

    if (isLoading) {
      return (
        <StyledButton
          className={className}
          color={color}
          disabled
          isInvert={isInvert}
          isLoading
          size={size}
        >
          <Loader color={color} isInvert={!isInvert} size="sm" />
        </StyledButton>
      );
    }

    if (href) {
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

    return (
      <StyledButton
        className={className}
        color={color}
        disabled={disabled}
        isInvert={isInvert}
        size={size}
        type={type}
        value={value}
        onClick={handleButton}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledButton>
    );
  }
}
