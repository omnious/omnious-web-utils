// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { StyledDropdown, StyledLabel, Title } from './styles';
import { DropdownItem, Props } from './types';

export class Dropdown extends Component<Props> {
  // getter
  private getValue = (items, value, multi) => {
    if (multi) {
      return items.reduce((result, item) => {
        if (value.includes(item.value)) {
          return [...result, item];
        }

        if (item.options) {
          return this.getValue(item.options, value, true);
        }

        return result;
      }, []);
    }

    return items.reduce((result, item) => {
      if (!result) {
        if (item.value === value) {
          return item;
        }

        if (item.options) {
          return this.getValue(item.options, value, false);
        }
      }

      return result;
    }, null);
  };

  // handler
  private onChange = (item: DropdownItem): void => {
    const { name, multi, onChange }: Props = this.props;
    let value;

    if (multi) {
    } else {
      value = item ? item.value : null;
    }

    onChange && onChange(value, name);
  };

  public render(): JSX.Element {
    const {
      className,
      clearable = true,
      disabled = false,
      dropdownClass,
      items = [],
      multi = false,
      placeholder = 'Choose an option',
      searchable = true,
      title,
      titleClass,
      value,
      width
    }: Props = this.props;
    const selectedValue = this.getValue(items, value, multi);

    return (
      <StyledLabel className={className} disabled={disabled}>
        {title && <Title className={titleClass}>{title}</Title>}
        <StyledDropdown
          className={dropdownClass}
          isClearable={clearable}
          isDisabled={disabled}
          isMulti={multi}
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
