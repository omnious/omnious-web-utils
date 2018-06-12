// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { RadioDot, StyledRadio } from '.';

// Interface
export interface RadioProps {
  className?: string;
  disabled: boolean;
  label: string;
  name: string;
  value: any;
  onChange(e: any): void;
}

// Component
export class Radio extends Component<RadioProps, {}> {
  private handleRadio = (e: any): void => {
    e.preventDefault();
    const { label, value, onChange }: RadioProps = this.props;

    onChange({ label, value });
  };

  public render(): JSX.Element {
    const { className, disabled, label, name, value, onChange, ...others }: RadioProps = this.props;

    return (
      <StyledRadio className={className}>
        <input
          disabled={disabled}
          name={name}
          type="radio"
          value={value}
          onChange={this.handleRadio}
          {...others}
        />
        <RadioDot />
        <span>{label}</span>
      </StyledRadio>
    );
  }
}
