// Global import
import { debounce } from 'lodash';
import * as React from 'react';
import { Component } from 'react';

// Local import
import { InputProps } from './constants';
import { InputTitle, InputWrapper, StyledLabel } from './styles';

/**
 *
 *
 * @export
 * @class Input
 * @extends {Component<InputProps>}
 */
export class Input extends Component<InputProps> {
  private handleInput = (e: any): void => {
    const value: string | null = e.target ? e.target.value : null;
    this.debouncedHandleInput(value);
  };

  private debouncedHandleInput: any = debounce((value: string | null) => {
    const { name, handleInput }: InputProps = this.props;
    handleInput(name, value);
  }, 200);

  public render(): JSX.Element {
    const {
      className,
      defaultValue,
      disabled = false,
      name,
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
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
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
