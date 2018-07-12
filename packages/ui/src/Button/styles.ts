// Global import
import styled from 'styled-components';

// Local import
import { ButtonProps } from './Button';
import { ButtonBase } from '../shared';

export const StyledButton: any = styled.button`
  ${ButtonBase};
  ${({ disabled }: ButtonProps): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};
`;
