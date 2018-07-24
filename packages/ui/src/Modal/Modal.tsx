// Global import
import * as React from 'react';
import { Component, createRef, HTMLAttributes } from 'react';
import SkyLight from 'react-skylight';

export interface ModalProps {
  innerRef: any;
}

export class Modal extends Component<ModalProps> {
  public render(): JSX.Element {
    const { children, innerRef }: ModalProps = this.props;

    return (
      <SkyLight ref={innerRef} hideOnOverlayClicked>
        {children}
      </SkyLight>
    );
  }
}
