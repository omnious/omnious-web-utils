import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '../Styles';

export const Spinner: React.SFC = (): JSX.Element => (
  <StyledSpinner />
);

const spinFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  animation: ${spinFrame} 1s infinite linear;
  border-left: 4px solid ${COLORS.primaryBlue};
  border-top: 4px solid ${COLORS.primaryBlue};
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

