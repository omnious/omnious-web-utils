// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { RadioDot, RadioInput, StyledRadioItem } from '.';

// Interface
export interface RadioItemProps {
  checked: boolean;
  className: string;
  disabled: boolean;
  label: string;
  name: string;
  value: any;
  handleRadio(name: string, value: string): void;
}

/**
 *
 *
 * @export
 * @class RadioItem
 * @extends {Component<RadioItemProps>}
 */
export class RadioItem extends Component<RadioItemProps> {
  private handleRadio = (e: any): void => {
    e.preventDefault();
    const { name, handleRadio }: RadioItemProps = this.props;

    if (handleRadio) {
      handleRadio(name, e.target.value);
    }
  };

  public render(): JSX.Element {
    const {
      checked,
      className,
      disabled = false,
      label,
      name,
      value
    }: // ...others
    RadioItemProps = this.props;

    return (
      <StyledRadioItem className={className}>
        <RadioDot checked={checked} />
        <RadioInput
          checked={checked}
          disabled={disabled}
          name={name}
          type="radio"
          value={value}
          onChange={this.handleRadio}
          // {...others}
        />
        <span>{label}</span>
      </StyledRadioItem>
    );
  }
}
