// Global import
import { styled } from 'linaria/react';
import * as React from 'react';
import { PureComponent, TableHTMLAttributes } from 'react';

// Local import
import { TableBody } from './table-body';
import { TableDataCell } from './table-data-cell';
import { TableFoot } from './table-foot';
import { TableHead } from './table-head';
import { TableHeaderCell } from './table-header-cell';
import { TableRow } from './table-row';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

const StyledTable = styled.table`
  background-color: #fff;
  border-collapse: collapse;
  width: 100%;

  & > tr:not(:first-of-type) {
    background-color: #333;
  }
`;

export class Table extends PureComponent<TableProps> {
  static Body = TableBody;
  static DataCell = TableDataCell;
  static Foot = TableFoot;
  static Head = TableHead;
  static HeaderCell = TableHeaderCell;
  static Row = TableRow;

  render() {
    const { children } = this.props;

    return <StyledTable>{children}</StyledTable>;
  }
}
