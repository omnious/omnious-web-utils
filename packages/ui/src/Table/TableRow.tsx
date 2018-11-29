// Global import
import * as React from 'react';
import styled from 'styled-components';

const TableRowComponent = ({ children, className }) => <tr className={className}>{children}</tr>;

export const TableRow = styled(TableRowComponent)`
  border-bottom: 1px solid #dfe3e6;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f4;
  }
`;
