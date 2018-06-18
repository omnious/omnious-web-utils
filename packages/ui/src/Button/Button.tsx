// Global import
import * as React from 'react';
import { ReactChildren, SFC } from 'react';

// Local import
import { StyledAnchor, StyledButton, StyledLink } from '.';
import { Loader } from '..';

// Interface
export interface ButtonProps {
  children: ReactChildren;
  className: string;
  color: string;
  disabled: boolean;
  href: string;
  icon: string;
  isInvert: boolean;
  isLoading: boolean;
  size: string;
  to: string;
  onClick(e: any): void;
}

export const Button: SFC<ButtonProps> = ({
  children,
  className,
  color,
  disabled,
  href,
  icon,
  isInvert,
  isLoading,
  size,
  to,
  onClick,
  ...others
}: ButtonProps): JSX.Element => {
  if (href) {
    return (
      <StyledAnchor
        className={className}
        color={color}
        href={href}
        isInvert={isInvert}
        size={size}
        {...others}
      >
        {children}
      </StyledAnchor>
    );
  }

  if (to) {
    return (
      <StyledLink
        className={className}
        color={color}
        isInvert={isInvert}
        size={size}
        to={to}
        {...others}
      >
        {children}
      </StyledLink>
    );
  }

  if (isLoading) {
    return (
      <StyledButton
        className={className}
        color={color}
        disabled={disabled}
        isInvert={isInvert}
        size={size}
        {...others}
      >
        <Loader color={color} isInvert={!isInvert} size="sm" />
      </StyledButton>
    );
  }

  return (
    <StyledButton
      className={className}
      color={color}
      disabled={disabled}
      isInvert={isInvert}
      size={size}
      onClick={onClick}
      {...others}
    >
      {icon && <img src={icon} />}
      {children}
    </StyledButton>
  );
};
