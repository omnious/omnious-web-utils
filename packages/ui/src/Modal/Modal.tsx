// Global import
import * as React from 'react';
import { HTMLAttributes, PureComponent } from 'react';

// Local import
import { Cancel } from '../Icons';
import { black } from '../colors';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  show: boolean;
  onHide: () => void;
}

export class ModalComponent extends PureComponent<ModalProps> {
  public render(): JSX.Element {
    const { children, className, onHide } = this.props;

    return (
      <div className={className}>
        <div className="overlay" onClick={onHide} />
        <section className="dialog">
          <button className="hide" onClick={onHide}>
            <Cancel color={black.primary} />
          </button>
          {children}
        </section>
      </div>
    );
  }
}
