// Global import
import * as React from 'react';
import styled from 'styled-components';

const TableBodyCellComponent = ({ children, className }) => (
  <td className={className}>{children}</td>
);

export const TableBodyCell = styled(TableBodyCellComponent)`
  padding: 15px 30px;
`;
