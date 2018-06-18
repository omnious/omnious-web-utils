// Global import
import styled from 'styled-components';

// Local import
import { COLORS, SIZES } from '..';

export const StyledInput: any = styled.label`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `};
`;

export const InputWrapper: any = styled.input.attrs({
  type: ({ type }: any): string => type || 'text'
})`
  border: 1px solid #cfdadf;
  border-radius: ${SIZES.xsRad};
  margin: 0.5rem 0 1rem;
  padding: 0.8rem 1rem;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    background-color: ${COLORS.white};
    border: 1px solid #bccbd2;
    outline: 0;
  }

  &::placeholder {
    color: #5a6872;
  }
`;
