// Global import
import * as React from 'react';
import { Component, SelectHTMLAttributes } from 'react';

// Local import
import { DropdownTitle, DropdownWrapper, StyledLabel } from './styles';

export interface DropdownItemProps {
  disabled?: boolean;
  label: string;
  value: any;
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  clearable?: boolean;
  items: DropdownItemProps[];
  searchable?: boolean;
  selectedValue: any;
  title?: string;
  width?: string;
  handleDropdown(name: string | undefined, value: any): void;
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
      placeholder = 'Choose an option',
      searchable = true,
      selectedValue,
      title = '',
      width
    }: DropdownProps = this.props;

    return (
      <StyledLabel className={className} disabled={disabled}>
        {title && <DropdownTitle>{title}</DropdownTitle>}
        <DropdownWrapper
          clearable={clearable}
          disabled={disabled}
          options={items}
          placeholder={placeholder}
          searchable={searchable}
          value={selectedValue}
          width={width}
          onChange={this.handleDropdown}
        />
      </StyledLabel>
    );
  }
}
