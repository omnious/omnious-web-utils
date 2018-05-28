// Global import
import * as React from 'react';
import { ReactNode, SFC } from 'react';

// Local import
import { Loader } from '..';

// Interface
export interface ButtonProps {
  children: ReactNode;
  className?: string;
  icon?: string;
  isLoading?: boolean;
  onClick(): void;
}

// Component
export const ButtonComponent: SFC<ButtonProps> = ({
  children,
  className,
  icon,
  isLoading,
  ...others
}: ButtonProps): JSX.Element => {
  if (isLoading) {
    return (
      <button className={className} {...others}>
        <Loader />
      </button>
    );
  }

  return (
    <button className={className} {...others}>
      {icon && <img src={icon} />}
      {children}
    </button>
  );
};
