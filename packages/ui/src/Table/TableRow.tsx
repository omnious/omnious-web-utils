// Global import
import * as React from 'react';
import styled from 'styled-components';

const Component: React.SFC = ({ children, className }) => <tr className={className}>{children}</tr>;

export const TableRow = styled(Component)`
  border-bottom: 1px solid #dfe3e6;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f4;
  }
`;
