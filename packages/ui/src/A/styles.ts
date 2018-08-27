// Global import
import styled from 'styled-components';

// Local import
import { AnchorProps } from './A';
import { black, white } from '../colors';
import { ButtonBase } from '../shared';

export const StyledAnchor: any = styled.a`
  ${ButtonBase};
  text-decoration: none;
  ${({ color, invert }: AnchorProps): string => {
    switch (color) {
      case 'primary':
      case 'blue': {
        if (invert) {
          return ``;
        }

        return `
          &:hover {
            text-decoration: underline ${white.primary};
          }
        `;
      }
      default:
        return `
          &:hover {
            text-decoration: underline ${black.primary};
          }
        `;
    }
  }};
  ${({ disabled }: AnchorProps): string =>
    disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `
      : ''};
`;
