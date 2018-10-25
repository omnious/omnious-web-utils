// Global import
import styled from 'styled-components';

// Local import
import { Props } from './types';
import { white } from '../colors';

export const StyledLabel: any = styled.label`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  ${({ disabled }: Props) =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `};
`;

export const Title = styled.h4`
  color: #53565a;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  background-color: #ececea;
  border: 0;
  outline: 1px solid #d0d0ce;
  min-height: 40px;
  padding: 0 1rem;
  width: ${({ width }: any): string => width || '20rem'};

  &:focus {
    background-color: ${white.primary};
    outline-width: 2px;
  }

  &::placeholder {
    color: #63666a;
  }
`;
