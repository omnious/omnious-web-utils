// Global import
import * as React from 'react';
import { SFC, TableHTMLAttributes } from 'react';

export interface TableFootProps extends TableHTMLAttributes<HTMLTableSectionElement> {}

export const TableFoot: SFC<TableFootProps> = ({ children }) => <tfoot>{children}</tfoot>;
