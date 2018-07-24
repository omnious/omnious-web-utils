// Global import
import styled from 'styled-components';

// Local import
import { CropboxState } from './Cropbox';
import { black } from '../colors';

export const StyledCropbox: any = styled.div`
  border: 1px dashed ${black.primary};
  height: ${({ height }: CropboxState): string => `${height}px`};
  transform: ${({ x, y }: CropboxState): string => `translate(${x}px, ${y}px)`};
  width: ${({ width }: CropboxState): string => `${width}px`};
`;
