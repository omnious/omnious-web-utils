// Global import
import * as React from 'react';
import { ReactNode, SFC } from 'react';

// Local import
import { StyledButton } from '.';
import { Loader } from '..';

// Interface
export interface ButtonProps {
  children: ReactNode;
  color: string;
  icon?: string;
  isInvert?: boolean;
  isLoading?: boolean;
  size: string;
  onClick(e: any): void;
}

// Component
export const Button: SFC<ButtonProps> = ({
  children,
  color,
  icon,
  isInvert,
  isLoading,
  size,
  ...others
}: ButtonProps): JSX.Element => {
  if (isLoading) {
    return (
      <StyledButton color={color} isInvert={isInvert} size={size} {...others}>
        <Loader color={color} isInvert={!isInvert} size="sm" />
      </StyledButton>
    );
  }

  return (
    <StyledButton color={color} isInvert={isInvert} size={size} {...others}>
      {icon && <img src={icon} />}
      {children}
    </StyledButton>
  );
};
