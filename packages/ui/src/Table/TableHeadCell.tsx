// Global import
import * as React from 'react';
import styled from 'styled-components';

const Component: React.SFC = ({ children, className }) => <th className={className}>{children}</th>;

export const TableHeadCell = styled(Component)`
  font-weight: 600;
  text-align: start;

  &:first-child {
    padding: 15px 30px;
  }

  &:not(:first-child) {
    padding: 15px 30px 15px 0;
  }
`;
