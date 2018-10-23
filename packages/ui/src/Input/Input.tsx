// Global import
import * as React from 'react';
import { PureComponent } from 'react';

// Local import
import { StyledInput, StyledLabel, Title } from './styles';
import { Props } from './types';

export class Input extends PureComponent<Props> {
  private onChange = (e: any): void => {
    e.preventDefault();
    const { name, onChange } = this.props;
    const value: string = e.target ? e.target.value : '';
    onChange && onChange(value, name);
  };

  public render(): JSX.Element {
    const {
      className,
      disabled = false,
      inputClass,
      placeholder,
      title,
      titleClass,
      type = 'text',
      value,
      width
    } = this.props;

    return (
      <StyledLabel className={className} disabled={disabled} width={width}>
        {title && <Title className={titleClass}>{title}</Title>}
        <StyledInput
          className={inputClass}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={this.onChange}
        />
      </StyledLabel>
    );
  }
}
