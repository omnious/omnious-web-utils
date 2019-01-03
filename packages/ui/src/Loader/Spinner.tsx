import * as React from 'react';
import { SFC } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const SpinnerComponent: SFC<Props> = ({ className, size = 'md' }) => (
  <div className={className} size={size} />
);

const spinFrame = keyframes`
  0% {
    transform: rotate(40deg);
  }

  100% {
    transform: rotate(400deg);
  }
`;

export const Spinner = styled(SpinnerComponent)`
  animation: ${spinFrame} 1s ease-in-out infinite;
  border-color: #707070;
  border-left-color: transparent;
  border-radius: 50%;
  border-style: solid;
  ${({ size }) => {
    switch (size) {
      case 'lg':
        return `
          border-width: 5px;
          height: 70px;
          width: 70px;
        `;
      case 'sm':
        return `
          border-width: 2px;
          height: 20px;
          width: 20px;
        `;
      case 'md':
      default:
        return `
          border-width: 3px;
          height: 40px;
          width: 40px;
        `;
    }
  }}
`;
