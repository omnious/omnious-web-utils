// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { StyledDropdown, StyledSelect } from '.';

// Interface
export interface DropdownProps {
  className?: string;
  items: any[];
  title: string;
  onChange(e: any): void;
}

/**
 *
 *
 * @param {DropdownProps} {
 *   items,
 *   title,
 *   onChange,
 *   ...others
 * }
 * @returns {JSX.Element}
 */
export const Dropdown: SFC<DropdownProps> = ({
  className,
  items,
  title,
  onChange,
  ...others
}: DropdownProps): JSX.Element => (
  <StyledDropdown className={className}>
    <h4>{title}</h4>
    <StyledSelect
      options={items}
      onChange={onChange}
      styles={{
        control: (styles: any): any => ({
          ...styles,
          border: '1px solid #cfdadf',
          borderRadius: '3px',
          padding: '0.3rem'
        })
      }}
      {...others}
    />
  </StyledDropdown>
);
