// Global import
import styled from 'styled-components';

// Local import
import { COLORS } from '../constants';
import { BasicButton } from '../SharedStyles';

export const StyledAnchor: any = styled.a`
  ${BasicButton};
  text-decoration: none;

  &:hover {
    text-decoration: underline ${COLORS.primaryBlack};
  }

  &:visited {
    color: ${COLORS.primaryBlack};
  }

  ${({ disabled }: any): any =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `};
`;
