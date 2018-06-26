// Global import
import styled from 'styled-components';

// Local import
import { COLORS } from '..';

export const StyledOmnious: any = styled.svg``;

export const FillArea: any = styled.g`
  fill: ${({ color }: any): string => {
    switch (color) {
      case 'white':
        return COLORS.white;
      case 'black':
        return COLORS.lightenBlack;
      case 'blue':
      default:
        return COLORS.primaryBlue;
    }
  }};
`;
