// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { InputWrapper, StyledInput } from '.';

// Interface
export interface InputProps {
  className: string;
  disabled: boolean;
  label: string;
  name: string;
  type: string;
  value: any;
  handleInput(name: string, value: string): void;
}

export class Input extends Component<InputProps> {
  private handleInput = (e: any): void => {
    e.preventDefault();
    const { name, handleInput }: any = this.props;

    if (handleInput) {
      handleInput(name, e.target.value);
    }
  };

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      label,
      name,
      type = 'text',
      value = ''
    }: // ...others
    InputProps = this.props;

    return (
      <StyledInput className={className}>
        <h4>{label}</h4>
        <InputWrapper
          disabled={disabled}
          name={name}
          type={type}
          value={value}
          onChange={this.handleInput}
          // {...others}
        />
      </StyledInput>
    );
  }
}
