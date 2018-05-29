// Global import
import styled from 'styled-components';

// Local import
import { InputComponent } from '.';
import { COLORS, SIZES } from '..';

export const Input: any = styled(InputComponent)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};

  & > input {
    border: 1px solid #cfdadf;
    border-radius: ${SIZES.xsRad};
    margin: 0.5rem 0 1rem;
    padding: 0.8rem 1rem;

    &:disabled {
      cursor: not-allowed;
    }

    &:focus {
      background-color: ${COLORS.white};
      outline: 0;
    }

    &::placeholder {
      color: #5a6872;
    }
  }
`;
