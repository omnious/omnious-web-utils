// Global import
import debounce from 'debounce';
import * as React from 'react';
import { Component, InputHTMLAttributes } from 'react';

// Local import
import { StyledInput } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
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
  private onChange = (e: any): void => {
    e.preventDefault();
    const value: string = e.target ? e.target.value : '';
    this.debouncedOnChange(value);
  };

  private debouncedOnChange: any = debounce((value: any) => {
    const { name, onChange }: InputProps = this.props;
    onChange && onChange(name, value);
  }, 200);

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      placeholder,
      title,
      type = 'text',
      width
    }: InputProps = this.props;

    return (
      <StyledInput className={className} disabled={disabled} width={width}>
        {title && <h4 className="title">{title}</h4>}
        <input
          className="input"
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          onChange={this.onChange}
        />
      </StyledInput>
    );
  }
}
