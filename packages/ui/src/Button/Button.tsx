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
      invert = false,
      loading = false
    } = this.props;

    if (loading) {
      return (
        <button className={className} disabled>
          <Loader color={color} invert={!invert} size="sm" />
        </button>
      );
    }

    return (
      <button className={className} onClick={this.onClick}>
        {children}
      </button>
    );
  }
}
