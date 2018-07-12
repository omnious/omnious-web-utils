// // Global import
// import * as React from 'react';
// import { Component } from 'react';

// // Local import
// import { ItemWrapper, StyledDropdown } from '.';
// import { COLORS, SIZES } from '..';

// // Interface
// export interface DropdownItemProps {
//   label: string;
//   value: any;
// }

// export interface DropdownProps {
//   className?: string;
//   items?: DropdownItemProps[];
//   placeholder?: string;
//   selected?: any;
//   title?: string;
//   handleDropdown?(name: any, item: any): void;
// }

// export class Dropdown extends Component<DropdownProps> {
//   private handleDropdown = (e: any): void => {
//     const { name, handleDropdown }: any = this.props;
//     const value: any = e ? e.value : null;
//     handleDropdown(name, value);
//   };

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

//   public render(): JSX.Element {
//     const { className, title, ...others }: DropdownProps = this.props;

//     return (
//       <StyledDropdown className={className} {...others}>
//         <h4>{title}</h4>
//         {this.renderItems()}
//       </StyledDropdown>
//     );
//   }
// }
