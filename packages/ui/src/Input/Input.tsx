// Global import
import * as React from 'react';
import { Component } from 'react';

// Local import
import { InputProps, InputTitle, InputWrapper, StyledLabel } from '.';

/**
 *
 *
 * @export
 * @class Input
 * @extends {Component<InputProps>}
 */
export class Input extends Component<InputProps> {
  private handleInput = (e: any): void => {
    e.preventDefault();
    const { name, handleInput }: InputProps = this.props;
    const value: string | null = e.target ? e.target.value : null;
    handleInput(name, value);
  };

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      name,
      placeholder = '',
      title = '',
      type = 'text',
      value
    }: InputProps = this.props;

    return (
      <StyledLabel disabled={disabled}>
        {title && <InputTitle>{title}</InputTitle>}
        <InputWrapper
          className={className}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={this.handleInput}
        />
      </StyledLabel>
    );
  }
}
