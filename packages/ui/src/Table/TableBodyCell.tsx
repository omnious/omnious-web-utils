// Global import
import * as React from 'react';
import styled from 'styled-components';

const Component: React.SFC = ({ children, className, colSpan }) => (
  <td className={className} colSpan={colSpan}>
    {children}
  </td>
);

export const TableBodyCell = styled(Component)`
  &:first-child {
    padding: 15px 30px;
  }

  &:not(:first-child) {
    padding: 15px 30px 15px 0;
  }
`;
