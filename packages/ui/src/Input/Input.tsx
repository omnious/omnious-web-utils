// Global import
import { debounce } from 'lodash';
import * as React from 'react';
import { Component, InputHTMLAttributes } from 'react';

// Local import
import { InputTitle, InputWrapper, StyledLabel } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleInput(name: string | undefined, value: any): void;
}

export interface InputState {
  value: string;
}

/**
 *
 *
 * @export
 * @class Input
 * @extends {Component<InputProps, InputState>}
 */
export class Input extends Component<InputProps, InputState> {
  public state: InputState = {
    value: ''
  };

  private handleInput = (e: any): void => {
    const value: string = e.target ? e.target.value : '';
    this.setState((state: InputState): InputState => ({ ...state, value }));
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
      title,
      type = 'text',
      value,
      width
    }: InputProps = this.props;
    const inputValue: string = value || this.state.value;

    return (
      <StyledLabel className={className} disabled={disabled}>
        {title && <InputTitle>{title}</InputTitle>}
        <InputWrapper
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={inputValue}
          width={width}
          onChange={this.handleInput}
        />
      </StyledLabel>
    );
  }
}
