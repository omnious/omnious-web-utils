// Global import
import styled from '@emotion/styled';
import * as React from 'react';
import { SFC, ThHTMLAttributes } from 'react';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}

const StyledTableHeaderCell = styled.th`
  font-weight: 600;
  text-align: start;

  &:first-of-type {
    padding: 15px 30px;
  }

  &:not(:first-of-type) {
    padding: 15px 30px 15px 0;
  }
`;

export const TableHeaderCell: SFC<TableHeaderCellProps> = ({ children }) => (
  <StyledTableHeaderCell>{children}</StyledTableHeaderCell>
);
