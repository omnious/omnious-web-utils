import * as React from 'react';

// Local import
import { StyledLabel } from './styles';

export const Input: any = ({ disabled, name, title, type, ...props }: any): JSX.Element => (
  <StyledLabel disabled={disabled} htmlFor={name}>
    <span>{title}</span>
    <input disabled={disabled} name={name} type={type || 'text'} {...props} />
  </StyledLabel>
);
