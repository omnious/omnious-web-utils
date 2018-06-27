// Global import
import styled from 'styled-components';

// Local import
import { COLORS, SIZES } from '../constants';

export const StyledTile: any = styled.section`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.secondaryGray};
  border-radius: ${SIZES.xsRad};
  box-shadow: ${COLORS.tileShadow};
  padding: ${SIZES.lgPad};
  text-align: left;
`;
