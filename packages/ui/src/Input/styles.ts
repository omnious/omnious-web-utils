// Global import
import styled from 'styled-components';

// Local import
import { InputProps } from './Input';
import { white } from '../colors';
import { radius } from '../sizes';

export const StyledLabel: any = styled.label`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  ${({ disabled }: InputProps): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};
`;

export const InputTitle: any = styled.h4`
  margin-bottom: 0.5rem;
`;

export const InputWrapper: any = styled.input`
  border: 1px solid #cfdadf;
  border-radius: ${radius.xs};
  padding: 0.8rem 1rem;
  width: ${({ width }: any): string => width || '20rem'};

  &:focus {
    background-color: ${white.primary};
    border: 1px solid #bccbd2;
    outline: 0;
  }

  &::placeholder {
    color: #5a6872;
  }
`;
