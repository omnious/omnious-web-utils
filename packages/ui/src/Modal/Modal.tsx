// Global import
import * as React from 'react';
import styled from 'styled-components';

// Local import
import { Cancel } from '../Icons';
import { black, white } from '../colors';

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  show: boolean;
  onHide: () => void;
}

class Component extends React.PureComponent<ModalProps> {
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

export const Modal = styled(Component)`
  align-items: center;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;

  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
  }

  .dialog {
    background-color: ${white.primary};
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
    max-height: 90vh;
    max-width: 50vw;
    overflow: auto;
    padding: 40px;
    position: absolute;
  }

  .hide {
    all: unset;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;
