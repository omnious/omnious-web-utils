// Global import
import * as React from 'react';
import { ButtonHTMLAttributes, Component } from 'react';

// Local import
import { StyledButton } from './styles';
import { Loader } from '../Loader';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  isInvert?: boolean;
  isLoading?: boolean;
  size?: string;
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
      isInvert = false,
      isLoading = false,
      size = 'md',
      type = 'button',
      width
    }: ButtonProps = this.props;

    if (isLoading) {
      return (
        <StyledButton
          className={className}
          color={color}
          disabled
          isInvert={isInvert}
          size={size}
          type={type}
          width={width}
        >
          <Loader color={color} isInvert={!isInvert} size="sm" />
        </StyledButton>
      );
    }

    return (
      <StyledButton
        className={className}
        color={color}
        disabled={disabled}
        isInvert={isInvert}
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
