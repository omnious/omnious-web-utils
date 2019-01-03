// Global import
import styled from 'styled-components';

// Local import
import { Props } from './types';
import { white } from '../colors';
import { radius } from '../sizes';

export const StyledLabel: any = styled.label`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  ${({ disabled }: Props): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};
`;

export const Title = styled.h4`
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  border: 1px solid #c8c9c7;
  height: 40px;
  padding: 0 1rem;
  width: ${({ width }): string => width || '20rem'};

  &:focus {
    background-color: ${white.primary};
    border: 1px solid #bccbd2;
    outline: 0;
  }

  &::placeholder {
    color: #5a6872;
  }
`;
