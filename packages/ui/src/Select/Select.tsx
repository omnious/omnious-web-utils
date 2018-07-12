// // Global import
// import * as React from 'react';
// import { Component, createRef } from 'react';
// import { generate } from 'shortid';

// // Local import
// import { MenuItem, MenuWrapper, SelectWrapper, StyledInput, StyledSelect, ValueWrapper } from '.';
// import { Arrow, Clear } from '..';

// // Interface
// export interface SelectProps {
//   title: string;
// }

// export interface SelectState {
//   isOpen: boolean;
// }

// export class Select extends Component<SelectProps, SelectState> {
//   private inputRef: any = createRef();

//   public readonly state: SelectState = {
//     isOpen: false
//   };

//   // public componentDidMount(): void {
//   // document.addEventListener('touchstart', this.closeMenu, false);
//   // }

//   private focusInput = (e: any): void => {
//     if (!this.state.isOpen) {
//       console.log('enter!!!', e.target);
//       this.inputRef.current.focus();
//     }
//   };

//   private closeMenu = (e: any): void => {
//     console.log('leave!', e);
//     this.setState((state: any): any => ({
//       ...state,
//       isOpen: false
//     }));
//   };

//   private openMenu = (e: any): void => {
//     console.log('enter!', e);
//     this.setState((state: any): any => ({
//       ...state,
//       isOpen: true
//     }));
//   };

//   private renderMenu = (): any => {
//     const { items }: any = this.props;

//     if (!items) {
//       return 'no items';
//     }

//     return items.map((item: any): JSX.Element => (
//       <MenuItem key={generate()}>{item.label}</MenuItem>
//     ));
//   };

//   public render(): JSX.Element {
//     const { isOpen }: SelectState = this.state;
//     const { title }: SelectProps = this.props;

//     return (
//       <StyledSelect>
//         <h4>{title}</h4>
//         <SelectWrapper>
//           <ValueWrapper onClick={this.focusInput}>
//             <StyledInput
//               innerRef={this.inputRef}
//               placeholder="Choose an option"
//               onFocus={this.openMenu}
//               onBlur={this.closeMenu}
//             />
//             <Clear />
//             <Arrow />
//           </ValueWrapper>
//           <MenuWrapper isOpen={isOpen}>{this.renderMenu()}</MenuWrapper>
//         </SelectWrapper>
//       </StyledSelect>
//     );
//   }
// }
