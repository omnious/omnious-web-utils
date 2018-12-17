// Global import
import * as React from 'react';
import { PureComponent } from 'react';
import styled from 'styled-components';

// Local import
import { TableBody } from './TableBody';
import { TableBodyCell } from './TableBodyCell';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';

class TableComponent extends PureComponent {
  static Body = TableBody;
  static BodyCell = TableBodyCell;
  static Head = TableHead;
  static HeadCell = TableHeadCell;
  static Row = TableRow;

  render() {
    const { children, className } = this.props;

    return <table className={className}>{children}</table>;
  }
}

export const Table = styled(TableComponent)`
  border-collapse: collapse;
  width: 100%;
`;
