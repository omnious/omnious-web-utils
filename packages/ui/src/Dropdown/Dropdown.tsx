// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { DropdownTitle, DropdownWrapper, StyledLabel } from '.';
import { FormItemProps } from '..';

// Interface
export interface DropdownItemProps {
  disabled?: boolean;
  label: string;
  value: any;
}

export interface DropdownProps extends FormItemProps {
  clearable?: boolean;
  items?: DropdownItemProps[];
  searchable?: boolean;
  selectedValue?: any;
  handleDropdown(name: string, value: any): void;
}

/**
 *
 *
 * @export
 * @class Dropdown
 * @extends {Component<DropdownProps>}
 */
export class Dropdown extends Component<DropdownProps> {
  private handleDropdown = (e: any): void => {
    const { name, handleDropdown }: DropdownProps = this.props;
    const value: any = e ? e.value : null;
    handleDropdown(name, value);
  };

  public render(): JSX.Element {
    const {
      className,
      clearable = true,
      disabled = false,
      items = [],
      name,
      placeholder = 'Choose an option',
      searchable = true,
      selectedValue,
      title = ''
    }: DropdownProps = this.props;

    return (
      <StyledLabel disabled={disabled}>
        {title && <DropdownTitle>{title}</DropdownTitle>}
        <DropdownWrapper
          className={className}
          clearable={clearable}
          disabled={disabled}
          name={name}
          options={items}
          placeholder={placeholder}
          searchable={searchable}
          value={selectedValue}
          onChange={this.handleDropdown}
        />
      </StyledLabel>
    );
  }
}
