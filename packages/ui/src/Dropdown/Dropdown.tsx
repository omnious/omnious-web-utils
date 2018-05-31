// Global import
import * as React from 'react';
import { SFC } from 'react';
import Select from 'react-select';

// Local import
import { StyledDropdown } from '.';

// Interface
export interface DropdownProps {
  items: any[];
  title: string;
  onChange(e: any): void;
}

// Component
export const Dropdown: SFC<DropdownProps> = ({
  items,
  title,
  onChange,
  ...others
}: DropdownProps): JSX.Element => (
  <StyledDropdown {...others}>
    <h3>{title}</h3>
    <Select options={items} onChange={onChange} {...others} />
  </StyledDropdown>
);
