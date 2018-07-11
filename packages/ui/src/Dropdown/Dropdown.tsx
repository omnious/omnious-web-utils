// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { DropdownProps } from './constants';
import { DropdownTitle, DropdownWrapper, StyledLabel } from './styles';

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
      title = '',
      width
    }: DropdownProps = this.props;

    return (
      <StyledLabel className={className} disabled={disabled}>
        {title && <DropdownTitle>{title}</DropdownTitle>}
        <DropdownWrapper
          clearable={clearable}
          disabled={disabled}
          name={name}
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
