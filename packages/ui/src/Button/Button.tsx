// Global import
import * as React from 'react';
import { ReactNode, SFC } from 'react';

// Local import
import { Loader } from '../';
import { StyledButton } from './Style';

// Interface
interface Props {
  children: ReactNode;
  icon?: string;
  isLoading?: boolean;
  onClick(): void;
}

// Component
export const Button: SFC<Props> = ({ children, icon, isLoading, ...options }: Props): JSX.Element => {
  if (isLoading) {
    return (
      <StyledButton {...options}>
        <Loader />
      </StyledButton>
    );
  }

  return (
    <StyledButton {...options}>
      {icon && <img src={icon} />}
      {children}
    </StyledButton>
  );
};
