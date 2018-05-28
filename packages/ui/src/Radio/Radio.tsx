// Global import
import * as React from 'react';
import { SFC } from 'react';

// Interface
export interface RadioProps {
  className?: string;
  disabled: boolean;
  id?: string;
  label: string;
  name: string;
  value: any;
}

// Component
export const RadioComponent: SFC<RadioProps> = ({
  className,
  disabled,
  id,
  label,
  name,
  value,
  ...others
}: RadioProps): JSX.Element => (
  <label className={className} htmlFor={id}>
    <input disabled={disabled} id={id} name={name} type="radio" value={value} {...others} />
    <span>{label}</span>
  </label>
);
