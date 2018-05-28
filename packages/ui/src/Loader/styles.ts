// Global import
import styled, { keyframes } from 'styled-components';

// Local import
import { LoaderComponent } from '.';
import { COLORS } from '..';

const spinFrame: any = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader: any = styled(LoaderComponent)`
  animation: ${spinFrame} 1s infinite linear;
  border-left: 4px solid ${COLORS.primaryBlue};
  border-top: 4px solid ${COLORS.primaryBlue};
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
