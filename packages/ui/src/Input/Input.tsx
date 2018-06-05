// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { StyledLabel, StyledInput } from '.';

// Interface
export interface InputProps {
  disabled: boolean;
  id?: string;
  label: string;
  name: string;
  type: string;
}

/**
 *
 *
 * @param {InputProps} {
 *   disabled,
 *   id,
 *   label,
 *   name,
 *   type,
 *   ...others
 * }
 * @returns {JSX.Element}
 */
export const Input: SFC<InputProps> = ({
  disabled,
  id,
  label,
  name,
  type,
  ...others
}: InputProps): JSX.Element => (
  <StyledLabel htmlFor={id}>
    <h4>{label}</h4>
    <StyledInput disabled={disabled} id={id} name={name} type={type || 'text'} {...others} />
  </StyledLabel>
);
