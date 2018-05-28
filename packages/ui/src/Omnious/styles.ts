// Global import
import styled from 'styled-components';

// Local import
import { OmniousComponent } from '.';
import { COLORS } from '..';

export const Omnious: any = styled(OmniousComponent)``;

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
