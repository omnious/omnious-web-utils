import * as React from 'react';
import { SFC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const ProgressCircleComponent: SFC<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const ProgressCircle = styled(ProgressCircleComponent)`
  border: 5px solid #ececea;
  border-radius: 50%;
  height: 90px;
  width: 90px;
`;
