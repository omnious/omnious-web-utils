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
  handleButton(name: string | undefined, value: any): void;
}

export class Button extends Component<ButtonProps> {
  private handleButton = (e: any): void => {
    e.preventDefault();
    const { name, value, handleButton }: ButtonProps = this.props;
    handleButton(name, value);
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
      type = 'button'
    }: ButtonProps = this.props;

    if (isLoading) {
      return (
        <StyledButton
          className={className}
          color={color}
          disabled
          isInvert={isInvert}
          isLoading
          size={size}
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
        onClick={this.handleButton}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledButton>
    );
  }
}
