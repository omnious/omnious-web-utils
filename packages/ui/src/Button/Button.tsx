// Global import
import * as React from 'react';
import { ButtonHTMLAttributes, Component } from 'react';

// Local import
import { StyledButton } from './styles';
import { Loader } from '../Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  invert?: boolean;
  loading?: boolean;
  size?: string;
  width?: string;
  onClick?(name, value): void;
}

export class Button extends Component<ButtonProps> {
  private onClick = (e: any): void => {
    e.preventDefault();
    const { name, value = null, onClick }: ButtonProps = this.props;
    onClick && onClick(name, value);
  };

  public render(): JSX.Element {
    const {
      children,
      className,
      color,
      disabled = false,
      icon,
      invert = false,
      loading = false,
      size = 'md',
      type = 'button',
      width
    }: ButtonProps = this.props;

    if (loading) {
      return (
        <StyledButton
          className={className}
          color={color}
          disabled
          invert={invert}
          size={size}
          type={type}
          width={width}
        >
          <Loader color={color} invert={!invert} size="sm" />
        </StyledButton>
      );
    }

    return (
      <StyledButton
        className={className}
        color={color}
        disabled={disabled}
        invert={invert}
        size={size}
        type={type}
        width={width}
        onClick={this.onClick}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledButton>
    );
  }
}
