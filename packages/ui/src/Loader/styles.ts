// Global import
import styled, { keyframes } from 'styled-components';

// Local import
import { COLORS } from '..';

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

  ${({ size }: any): string => {
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

  ${({ color, isInvert }: any): string => {
    switch (color) {
      case 'primary': {
        if (isInvert) {
          return `border-color: ${COLORS.white} ${COLORS.white} transparent;`;
        }

        return `border-color: ${COLORS.primaryBlue} ${COLORS.primaryBlue} transparent;`;
      }
      case 'danger': {
        if (isInvert) {
          return `border-color: ${COLORS.white} ${COLORS.white} transparent;`;
        }

        return `border-color: ${COLORS.primaryRed} ${COLORS.primaryRed} transparent;`;
      }
      default: {
        if (isInvert) {
          return `border-color: ${COLORS.primaryBlack} ${COLORS.primaryBlack} transparent;`;
        }

        return `border-color: ${COLORS.primaryGray} ${COLORS.primaryGray} transparent;`;
      }
    }
  }};
`;
