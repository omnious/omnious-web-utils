// Global import
import * as React from 'react';
import { Component, SelectHTMLAttributes } from 'react';

// Local import
import { DropdownTitle, DropdownWrapper, StyledLabel } from './styles';

export interface DropdownItemProps {
  isDisabled?: boolean;
  label: string;
  value: any;
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  isClearable?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  items: DropdownItemProps[];
  width?: string;
  handleDropdown(name: string | undefined, value: any): void;
}

export interface DropdownState {
  value: DropdownItemProps;
}

/**
 *
 *
 * @export
 * @class Dropdown
 * @extends {Component<DropdownProps, DropdownState>}
 */
export class Dropdown extends Component<DropdownProps, DropdownState> {
  public state: DropdownState = {
    value: null
  };

  private handleDropdown = (e: any): void => {
    const { name, handleDropdown }: any = this.props;
    const value: any = e ? e.value : null;
    this.setState((state: DropdownState): DropdownState => ({ ...state, value: e }));
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
      items.find((item: DropdownItemProps): boolean => value === item.value) || this.state.value;

    return (
      <StyledLabel className={className} disabled={isDisabled}>
        {title && <DropdownTitle>{title}</DropdownTitle>}
        <DropdownWrapper
          isClearable={isClearable}
          isDisabled={isDisabled}
          isSearchable={isSearchable}
          options={items}
          placeholder={placeholder}
          value={selectedValue}
          width={width}
          onChange={this.handleDropdown}
        />
      </StyledLabel>
    );
  }
}
