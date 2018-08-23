// Global import
import * as React from 'react';
import { Component, HTMLAttributes } from 'react';

// Local import
import { StyledModal } from './styles';
import { Cancel } from '../Icons';
import { black } from '../colors';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  show: boolean;
  onHide(): void;
}

export class Modal extends Component<ModalProps> {
  public shouldComponentUpdate(): boolean {
    return true;
  }

  public render(): JSX.Element {
    const { children, show, onHide }: ModalProps = this.props;

    return (
      <StyledModal show={show}>
        <div className="overlay" onClick={onHide} />
        <section className="dialog">
          <button className="hide" onClick={onHide}>
            <Cancel color={black.primary} />
          </button>
          {children}
        </section>
      </StyledModal>
    );
  }
}
