// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { ButtonProps, StyledButton } from '.';
import { Loader } from '../Loader';

export const Button: SFC<ButtonProps> = ({
  children,
  className,
  color = 'primary',
  disabled = false,
  // href,
  icon,
  isInvert = false,
  isLoading = false,
  size,
  // to,
  type = 'button',
  handleButton
}: ButtonProps): JSX.Element => {
  // if (href) {
  //   return (
  //     <StyledAnchor className={className} color={color} href={href} isInvert={isInvert} size={size}>
  //       {children}
  //     </StyledAnchor>
  //   );
  // }

  // if (to) {
  //   return (
  //     <StyledLink className={className} color={color} isInvert={isInvert} size={size} to={to}>
  //       {children}
  //     </StyledLink>
  //   );
  // }

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

  return (
    <StyledButton
      className={className}
      color={color}
      disabled={disabled}
      isInvert={isInvert}
      size={size}
      type={type}
      onClick={handleButton}
    >
      {icon && <img src={icon} />}
      {children}
    </StyledButton>
  );
};
