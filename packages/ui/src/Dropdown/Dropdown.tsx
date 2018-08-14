// Global import
import * as React from 'react';
import { Component, SelectHTMLAttributes } from 'react';
import Select, { ReactSelectProps } from 'react-select';

// Local import
import { StyledDropdown } from './styles';

export interface DropdownItemProps {
  isDisabled?: boolean;
  label: string;
  value: any;
}

export interface DropdownProps extends ReactSelectProps {
  items: DropdownItemProps[];
  width?: string;
}

/**
 *
 *
 * @export
 * @class Dropdown
 * @extends {Component<DropdownProps>}
 */
export class Dropdown extends Component<DropdownProps> {
  private onChange = (item: DropdownItemProps): void => {
    const { name, onChange }: DropdownProps = this.props;
    const value: any = item ? item.value : null;
    onChange && onChange(name, value);
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
      isClearable = true,
      isDisabled = false,
      isSearchable = true,
      items = [],
      placeholder = 'Choose an option',
      title,
      value,
      width
    }: DropdownProps = this.props;
    const selectedValue: DropdownItemProps =
      items.find((item: DropdownItemProps): boolean => value === item.value) || null;

    return (
      <StyledDropdown className={className} disabled={isDisabled} width={width}>
        {title && <h4 className="title">{title}</h4>}
        <Select
          className="dropdown"
          isClearable={isClearable}
          isDisabled={isDisabled}
          isSearchable={isSearchable}
          options={items}
          placeholder={placeholder}
          value={selectedValue}
          onChange={this.onChange}
        />
      </StyledDropdown>
    );
  }
}
