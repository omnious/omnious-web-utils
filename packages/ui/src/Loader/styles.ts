// Global import
import styled, { keyframes } from 'styled-components';

// Local import
import { LoaderProps } from './Loader';
import { black, blue, gray, red, white } from '../colors';

const spinFrame: any = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader: any = styled.div`
  animation: ${spinFrame} 1s infinite linear;
  border-radius: 50%;
  border-style: solid;
  ${({ size }: LoaderProps): string => {
    switch (size) {
      case 'lg':
        return `
          border-width: 0.5rem;
          height: 5rem;
          width: 5rem;
        `;
      case 'sm':
      default:
        return `
          border-width: 0.1rem;
          height: 1rem;
          width: 1rem;
        `;
    }
  }};
  ${({ color, invert }: LoaderProps): string => {
    switch (color) {
      case 'primary':
      case 'blue': {
        if (invert) {
          return `border-color: ${white.primary} ${white.primary} transparent;`;
        }

        return `border-color: ${blue.primary} ${blue.primary} transparent;`;
      }
      case 'danger':
      case 'red': {
        if (invert) {
          return `border-color: ${white.primary} ${white.primary} transparent;`;
        }

        return `border-color: ${red.primary} ${red.primary} transparent;`;
      }
      default: {
        if (invert) {
          return `border-color: ${black.primary} ${black.primary} transparent;`;
        }

        return `border-color: ${gray.primary} ${gray.primary} transparent;`;
      }
    }
  }};
`;
