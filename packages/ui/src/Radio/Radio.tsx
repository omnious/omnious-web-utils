// // Global import
// import * as React from 'react';
// import { Component } from 'react';
// import { generate } from 'shortid';

// // Local import
// import {
//   RadioDot,
//   RadioInput,
//   RadioItemProps,
//   RadioItemWrapper,
//   RadioProps,
//   RadioTitle,
//   StyledRadio,
//   StyledRadioItem
// } from '.';

// /**
//  *
//  *
//  * @export
//  * @class Radio
//  * @extends {Component<RadioProps>}
//  */
// export class Radio extends Component<RadioProps> {
//   private handleRadio = (e: any): void => {
//     e.preventDefault();
//     const { name, handleRadio }: RadioProps = this.props;
//     const value: any = e.target ? e.target.value : null;
//     handleRadio(name, value);
//   };

//   private renderItems = (): string | JSX.Element[] => {
//     const { items = [], name, selectedValue }: RadioProps = this.props;

//     if (!items.length) {
//       return 'No items';
//     }

//     return items.map(
//       ({ defaultChecked = false, disabled = false, label, value }: RadioItemProps): JSX.Element => (
//         <StyledRadioItem key={generate()} disabled={disabled}>
//           <RadioDot checked={value === String(selectedValue)} />
//           <RadioInput
//             checked={value === String(selectedValue)}
//             defaultChecked={defaultChecked}
//             disabled={disabled}
//             name={name}
//             type="radio"
//             value={value}
//             onChange={this.handleRadio}
//           />
//           <span>{label}</span>
//         </StyledRadioItem>
//       )
//     );
//   };

//   public render(): JSX.Element {
//     const { className, disabled = false, isVertical = true, title = '' }: RadioProps = this.props;

//     return (
//       <StyledRadio disabled={disabled}>
//         {title && <RadioTitle>{title}</RadioTitle>}
//         <RadioItemWrapper className={className} isVertical={isVertical}>
//           {this.renderItems()}
//         </RadioItemWrapper>
//       </StyledRadio>
//     );
//   }
// }
