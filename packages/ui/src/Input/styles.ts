// Global import
import styled from 'styled-components';

// Local import
import { COLORS, SIZES } from '../constants';

export const StyledLabel: any = styled.label`
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
    margin-top: 0.5rem;
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

export const StyledInput: any = styled.input.attrs({
  type: ({ type }: any): string => type || 'text'
})`
  border: 1px solid #cfdadf;
  border-radius: ${SIZES.xsRad};
  margin-top: 0.5rem;
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
`;
