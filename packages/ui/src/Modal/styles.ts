// Global import
import styled from 'styled-components';

// Local import
import { ModalComponent } from './Modal';
import { white } from '../colors';
import { space } from '../sizes';

export const Modal = styled(ModalComponent)`
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
    border-radius: 5px;
    box-shadow: 0 1px 16px 0 rgba(78, 117, 131, 0.14);
    max-height: 90vh;
    max-width: 50vw;
    overflow: auto;
    padding: 1.5rem;
    position: absolute;
  }

  .hide {
    all: unset;
    position: absolute;
    right: ${space.md};
    top: ${space.md};
  }
`;
