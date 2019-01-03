// Global import
import * as React from 'react';
import styled from 'styled-components';

const TableHeadCellComponent = ({ children, className }) => (
  <th className={className}>{children}</th>
);

export const TableHeadCell = styled(TableHeadCellComponent)`
  font-weight: 600;
  padding: 15px 30px;
  text-align: start;
`;
