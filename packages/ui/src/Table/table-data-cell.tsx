// Global import
import styled from '@emotion/styled';
import * as React from 'react';
import { SFC, TdHTMLAttributes } from 'react';

export interface TableDataCellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {}

const StyledTableDataCell = styled.td`
  &:first-of-type {
    padding: 15px 30px;
  }

  &:not(:first-of-type) {
    padding: 15px 30px 15px 0;
  }
`;

export const TableDataCell: SFC<TableDataCellProps> = ({ children, colSpan }) => (
  <StyledTableDataCell colSpan={colSpan}>{children}</StyledTableDataCell>
);
