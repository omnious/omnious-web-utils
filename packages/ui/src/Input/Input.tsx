// Global import
import { debounce } from 'lodash';
import * as React from 'react';
import { Component, InputHTMLAttributes } from 'react';

// Local import
import { InputTitle, InputWrapper, StyledLabel } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleInput(name: string | undefined, value: any): void;
}

/**
 *
 *
 * @export
 * @class Input
 * @extends {Component<InputProps>}
 */
export class Input extends Component<InputProps> {
  private handleInput = (e: any): void => {
    const value: string = e.target ? e.target.value : null;
    this.debouncedHandleInput(value);
  };

  private debouncedHandleInput: any = debounce((value: any) => {
    const { name, handleInput }: InputProps = this.props;
    handleInput(name, value);
  }, 200);

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      placeholder,
      title = '',
      type = 'text',
      value,
      width
    }: InputProps = this.props;

    return (
      <StyledLabel disabled={disabled}>
        {title && <InputTitle>{title}</InputTitle>}
        <InputWrapper
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          width={width}
          onChange={this.handleInput}
        />
      </StyledLabel>
    );
  }
}
