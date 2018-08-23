// Global import
import * as React from 'react';
import { Component, InputHTMLAttributes } from 'react';

// Local import
import { StyledInput } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  onChange?(name, value): void;
}

export interface InputState {
  value: string;
}

export class Input extends Component<InputProps, InputState> {
  private onChange = (e: any): void => {
    e.preventDefault();
    const { name, onChange }: InputProps = this.props;
    const value: string = e.target ? e.target.value : '';
    onChange && onChange(name, value);
  };

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
