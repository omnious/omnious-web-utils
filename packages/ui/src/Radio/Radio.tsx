// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { RadioDot, StyledRadio } from '.';

// Interface
export interface RadioProps {
  className: string;
  disabled: boolean;
  label: string;
  name: string;
  selected: any;
  value: any;
  handleRadio(e: any): void;
}

// Component
export class Radio extends Component<RadioProps, {}> {
  private handleRadio = (e: any): void => {
    e.preventDefault();
    const { label, value, handleRadio }: RadioProps = this.props;

    handleRadio({ label, value });
  };

  public render(): JSX.Element {
    const {
      className,
      disabled,
      label,
      name,
      selected,
      value,
      handleRadio,
      ...others
    }: RadioProps = this.props;

    return (
      <StyledRadio className={className}>
        <input
          checked={value === selected}
          disabled={disabled}
          name={name}
          type="radio"
          onChange={this.handleRadio}
          {...others}
        />
        <RadioDot />
        <span>{label}</span>
      </StyledRadio>
    );
  }
}
