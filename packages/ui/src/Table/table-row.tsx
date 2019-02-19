// Global import
import styled from '@emotion/styled';
import * as React from 'react';
import { SFC, TableHTMLAttributes } from 'react';

export interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {}

const StyledRow = styled.tr`
  border-bottom: 1px solid #dfe3e6;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f4;
  }
`;

export const TableRow: SFC<TableRowProps> = ({ children }) => <StyledRow>{children}</StyledRow>;
