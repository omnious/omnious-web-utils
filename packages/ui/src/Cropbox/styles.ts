// Global import
import styled from 'styled-components';

// Local import
import { CropboxState } from './Cropbox';
import { black } from '../colors';

export const StyledCropbox: any = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px dashed ${black.primary};
  height: ${({ height }: CropboxState): string => `${height}px`};
  left: 0;
  position: absolute;
  top: 0;
  transform: ${({ x, y }: CropboxState): string => `translate(${x}px, ${y}px)`};
  width: ${({ width }: CropboxState): string => `${width}px`};
`;
