// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { StyledDropdown, StyledLabel, Title } from './styles';
import { DropdownItem, Props } from './types';

export class Dropdown extends Component<Props> {
  // getter
  private getValue = (items, value) =>
    items.reduce((result, item) => {
      if (!result) {
        if (item.value === value) {
          return item;
        }

        if (item.options) {
          return this.getValue(item.options, value);
        }
      }

      return result;
    }, null);

  // handler
  private onChange = (item: DropdownItem): void => {
    const { name, onChange }: Props = this.props;
    const value: any = item ? item.value : null;
    onChange && onChange(value, name);
  };

  public render(): JSX.Element {
    const {
      className,
      clearable = true,
      disabled = false,
      dropdownClass,
      items = [],
      placeholder = 'Choose an option',
      searchable = true,
      title,
      titleClass,
      value,
      width
    }: Props = this.props;
    const selectedValue = this.getValue(items, value);

    return (
      <StyledLabel className={className} disabled={disabled}>
        {title && <Title className={titleClass}>{title}</Title>}
        <StyledDropdown
          className={dropdownClass}
          isClearable={clearable}
          isDisabled={disabled}
          isSearchable={searchable}
          options={items}
          placeholder={placeholder}
          value={selectedValue}
          width={width}
          onChange={this.onChange}
        />
      </StyledLabel>
    );
  }
}
