import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import STYLES from '../constants/styles';


interface ISpinnerProps {
  className?: string;
}

const Spinner: React.StatelessComponent<ISpinnerProps> = props => (
  <div className={props.className} />
);

const spinFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(Spinner)`
  animation: ${spinFrame} 1s infinite linear;
  border-left: 4px solid ${STYLES.primaryBlue};
  border-top: 4px solid ${STYLES.primaryBlue};
  border-right: 4px solid rgba(255, 255, 255, 0);
  border-bottom: 4px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

export default StyledSpinner;
