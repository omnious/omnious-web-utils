// Global import
import * as React from 'react';
import { Component } from 'react';
import { generate } from 'shortid';

// Local import
import {
  RadioDot,
  RadioInput,
  RadioItemProps,
  RadioItemWrapper,
  RadioProps,
  RadioTitle,
  StyledRadio,
  StyledRadioItem
} from '.';

/**
 *
 *
 * @export
 * @class Radio
 * @extends {Component<RadioProps>}
 */
export class Radio extends Component<RadioProps> {
  private handleRadio = (e: any): void => {
    e.preventDefault();
    const { name, handleRadio }: RadioProps = this.props;
    const value: any = e.target ? e.target.value : null;
    handleRadio(name, value);
  };

  private renderItems = (): string | JSX.Element[] => {
    const { items = [], name, selectedValue }: RadioProps = this.props;

    if (!items.length) {
      return 'No items';
    }

    return items.map(
      ({ disabled = false, label, value }: RadioItemProps): JSX.Element => (
        <StyledRadioItem key={generate()} disabled={disabled}>
          <RadioDot checked={value === selectedValue} />
          <RadioInput
            checked={value === selectedValue}
            disabled={disabled}
            name={name}
            value={value}
          />
          <span>{label}</span>
        </StyledRadioItem>
      )
    );
  };

  public render(): JSX.Element {
    const { className, disabled = false, isVertical = true, title = '' }: RadioProps = this.props;

    return (
      <StyledRadio disabled={disabled}>
        {title && <RadioTitle>{title}</RadioTitle>}
        <RadioItemWrapper className={className} isVertical={isVertical} onChange={this.handleRadio}>
          {this.renderItems()}
        </RadioItemWrapper>
      </StyledRadio>
    );
  }
}
