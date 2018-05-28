// Global import
import * as React from 'react';
import { SFC } from 'react';

// Interface
export interface InputProps {
  className?: string;
  disabled: boolean;
  id?: string;
  label: string;
  name: string;
  type: string;
}

// Component
export const InputComponent: SFC<InputProps> = ({
  className,
  disabled,
  id,
  label,
  name,
  type,
  ...others
}: any): JSX.Element => (
  <label className={className} htmlFor={id}>
    <span>{label}</span>
    <input disabled={disabled} id={id} name={name} type={type || 'text'} {...others} />
  </label>
);
