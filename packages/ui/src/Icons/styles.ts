// Global import
import styled from 'styled-components';

// Local import
import { black, blue, white } from '../colors';

export const StyledOmnious: any = styled.svg``;

export const FillArea: any = styled.g`
  fill: ${({ color }: any): string => {
    switch (color) {
      case 'white':
        return white.primary;
      case 'black':
        return black.primary;
      case 'blue':
      default:
        return blue.primary;
    }
  }};
`;
