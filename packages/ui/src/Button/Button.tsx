// Global import
import * as React from 'react';
import { PureComponent } from 'react';

// Local import
import { Props } from './types';
import { Loader } from '../Loader';

export class ButtonComponent extends PureComponent<Props> {
  private onClick = (e: any): void => {
    e.preventDefault();
    const { name, value = null, onClick } = this.props;
    onClick && onClick(value, name);
  };

  public render() {
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
    } = this.props;

    if (loading) {
      return (
        <button
          className={className}
          color={color}
          disabled
          invert={invert}
          size={size}
          type={type}
          width={width}
        >
          <Loader color={color} invert={!invert} size="sm" />
        </button>
      );
    }

    return <button className={className}>{children}</button>;
  }
}
