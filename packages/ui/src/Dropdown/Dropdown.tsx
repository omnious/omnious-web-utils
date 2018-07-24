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
  resetValue?: DropdownItemProps;
  searchable?: boolean;
  selectedValue: any;
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
    const { name, handleDropdown }: any = this.props;
    const value: any = e ? e.value : null;
    handleDropdown(name, value);
  };

  //   private renderItems = (): any => {
  //     const {
  //       items = [],
  //       placeholder = 'Choose an option',
  //       selected,
  //       ...others
  //     }: DropdownProps = this.props;
  //     const value: any = items.find((item: any): boolean => item.value === selected);

  //     return (
  //       <ItemWrapper
  //         options={items}
  //         placeholder={placeholder}
  //         styles={{
  //           control: (base: any, state: any): any => ({
  //             ...base,
  //             backgroundColor: 'transparent',
  //             borderColor: '#cfdadf',
  //             borderRadius: state.isFocused ? `${SIZES.xsRad} ${SIZES.xsRad} 0 0` : SIZES.xsRad,
  //             borderWidth: '1px',
  //             boxShadow: 0,
  //             cursor: 'pointer',
  //             padding: '0.3rem',
  //             '&:hover': { borderColor: '#cfdadf' }
  //           }),
  //           indicatorSeparator: (base: any): any => ({ ...base, backgroundColor: 'transparent' }),
  //           menu: (base: any): any => ({
  //             ...base,
  //             borderRadius: `0 0 ${SIZES.xsRad} ${SIZES.xsRad}`,
  //             boxShadow: COLORS.menuShadow,
  //             margin: 0
  //           }),
  //           menuList: (base: any): any => ({ ...base, padding: 0 }),
  //           option: (base: any): any => ({
  //             ...base,
  //             cursor: 'pointer',
  //             padding: `${SIZES.smPad} ${SIZES.mdPad}`,
  //             '&:hover': { backgroundColor: '#f3fafd' }
  //           })
  //         }}
  //         value={value}
  //         onChange={this.handleDropdown}
  //         {...others}
  //       />
  //     );
  //   };

  public render(): JSX.Element {
    const {
      className,
      clearable = true,
      disabled = false,
      items = [],
      placeholder = 'Choose an option',
      resetValue,
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
          resetValue={resetValue}
          searchable={searchable}
          value={selectedValue}
          width={width}
          onChange={this.handleDropdown}
        />
      </StyledLabel>
    );
  }
}
