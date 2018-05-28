// Global import
import styled from 'styled-components';

// Local import
import { TileComponent } from '.';
import { COLORS, SIZES } from '..';

export const Tile: any = styled(TileComponent)`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.secondaryGray};
  border-radius: ${SIZES.xsRad};
  box-shadow: ${COLORS.tileShadow};
  padding: ${SIZES.lgPad};
  text-align: left;
`;
