// Global import
import styled from 'styled-components';

// Local import
import { COLORS, SIZES } from '../constants';

export const StyledLabel: any = styled.label`
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

export const InputTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const InputWrapper: any = styled.input.attrs({
  type: ({ type }: any): string => type || 'text'
})`
  border: 1px solid #cfdadf;
  border-radius: ${SIZES.xsRad};
  padding: 0.8rem 1rem;

  &:focus {
    background-color: ${COLORS.white};
    border: 1px solid #bccbd2;
    outline: 0;
  }

  &::placeholder {
    color: #5a6872;
  }
`;
