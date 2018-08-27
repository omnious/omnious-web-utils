// Global import
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { AnchorHTMLAttributes, Component } from 'react';

// Local import
import { StyledAnchor } from './styles';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  icon?: string;
  invert?: boolean;
  size?: string;
}

export class A extends Component<AnchorProps> {
  public static contextTypes: any = {
    router: PropTypes.any
  };

  private handleAnchor = (e: any): void => {
    e.preventDefault();
    const { history }: any = this.context.router;
    const { href }: AnchorProps = this.props;

    history.push(href);
  };

  public render(): JSX.Element {
    const {
      children,
      className,
      color = 'none',
      disabled = false,
      href,
      icon,
      invert = false,
      size = 'md'
    }: AnchorProps = this.props;

    return (
      <StyledAnchor
        className={className}
        color={color}
        disabled={disabled}
        href={href}
        invert={invert}
        size={size}
        onClick={this.handleAnchor}
      >
        {icon && <img src={icon} />}
        {children}
      </StyledAnchor>
    );
  }
}
