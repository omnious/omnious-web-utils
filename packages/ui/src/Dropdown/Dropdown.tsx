// Global import
import * as React from 'react';
import { SFC } from 'react';

// Local import
import { StyledDropdown, StyledSelect } from '.';
import { COLORS, SIZES } from '..';

// Interface
export interface DropdownProps {
  className: string;
  items: any[];
  placeholder: string;
  title: string;
  value: any;
  onChange(e: any): void;
}

export const Dropdown: SFC<DropdownProps> = ({
  className,
  items = [],
  placeholder = 'Choose an option',
  title,
  value,
  onChange,
  ...others
}: DropdownProps): JSX.Element => (
  <StyledDropdown className={className}>
    <h4>{title}</h4>
    <StyledSelect
      options={items}
      placeholder={placeholder}
      styles={{
        control: (base: any, state: any): any => ({
          ...base,
          backgroundColor: 'transparent',
          borderColor: state.isFocused ? 'transparent' : '#cfdadf',
          borderRadius: state.isFocused ? `${SIZES.xsRad} ${SIZES.xsRad} 0 0` : SIZES.xsRad,
          borderWidth: '1px',
          boxShadow: 0,
          cursor: 'pointer',
          padding: '0.3rem',

          '&:hover': {
            borderColor: state.isFocused ? 'transparent' : '#cfdadf'
          }
        }),
        indicatorSeparator: (base: any): any => ({
          ...base,
          backgroundColor: 'transparent'
        }),
        menu: (base: any): any => ({
          ...base,
          borderRadius: `0 0 ${SIZES.xsRad} ${SIZES.xsRad}`,
          boxShadow: COLORS.menuShadow,
          margin: 0
        }),
        menuList: (base: any): any => ({
          ...base,
          padding: 0
        }),
        option: (base: any): any => ({
          ...base,
          cursor: 'pointer',
          padding: `${SIZES.smPad} ${SIZES.mdPad}`,

          '&:hover': {
            backgroundColor: '#f3fafd'
          }
        })
      }}
      onChange={onChange}
      {...others}
    />
  </StyledDropdown>
);
